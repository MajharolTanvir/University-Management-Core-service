/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma, Room } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { prisma } from '../../../shared/prisma';
import {
  roomRelationalFieldsMapper,
  roomSearchableFields,
} from './room.constant';
import { IRoomFilterRequest } from './room.interface';

const createRoom = async (payload: Room): Promise<Room> => {
  const result = await prisma.room.create({
    data: payload,
  });

  return result;
};

const getAllRoom = async (
  filters: IRoomFilterRequest,
  options: IPaginationOptions
) => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: roomSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (roomSearchableFields.includes(key)) {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        } else {
          return {
            [roomRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereConditions: Prisma.RoomWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.room.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });

  const total = await prisma.room.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleRoom = async (id: string) => {
  const result = await prisma.room.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateRoom = async (id: string, payload: Partial<Room>) => {
  const result = await prisma.room.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteRoom = async (id: string) => {
  const result = await prisma.room.delete({
    where: {
      id,
    },
  });

  return result;
};

export const RoomServices = {
  createRoom,
  getAllRoom,
  getSingleRoom,
  updateRoom,
  deleteRoom,
};
