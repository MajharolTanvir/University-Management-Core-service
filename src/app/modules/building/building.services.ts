import { Building, Prisma } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { BuildingSearchableField } from './building.interface';
import { buildingSearchableField } from './building.constant';

const createBuilding = async (data: Building): Promise<Building> => {
  const result = await prisma.building.create({
    data,
  });

  return result;
};

const getAllBuilding = async (
  filters: BuildingSearchableField,
  options: IPaginationOptions
): Promise<IGenericResponse<Building[]>> => {
  const { searchTerm } = filters;
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: buildingSearchableField.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  const whereCondition: Prisma.BuildingWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.building.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });

  const total = await prisma.building.count({
    where: whereCondition,
  });
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleBuilding = async (id: string) => {
  const result = await prisma.building.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateBuilding = async (
  id: string,
  payload: Partial<Building>
): Promise<Building> => {
  const result = await prisma.building.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteBuilding = async (id: string) => {
  const result = await prisma.building.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BuildingService = {
  createBuilding,
  getAllBuilding,
  getSingleBuilding,
  updateBuilding,
  deleteBuilding,
};
