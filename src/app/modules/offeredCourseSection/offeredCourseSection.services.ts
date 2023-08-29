/* eslint-disable @typescript-eslint/no-explicit-any */
import { OfferedCourseSection, Prisma } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IOfferedCourseSectionFilterRequest } from './offeredCourseSection.interface';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import {
  offeredCourseSectionRelationalFields,
  offeredCourseSectionRelationalFieldsMapper,
  offeredCourseSectionSearchableFields,
} from './offeredCourseSection.constant';

const createOfferedCourseSection = async (
  data: OfferedCourseSection
): Promise<OfferedCourseSection> => {
  const isExistOfferedCorse = await prisma.offeredCourse.findFirst({
    where: {
      id: data.offeredCourseId,
    },
  });

  if (!isExistOfferedCorse) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Offered course doesn't exist");
  }

  data.semesterRegistrationId = isExistOfferedCorse.semesterRegistrationId;
  const result = await prisma.offeredCourseSection.create({
    data,
    include: {
      offeredCourse: true,
      semesterRegistration: true,
    },
  });

  return result;
};

const getAllOfferedCourseSection = async (
  filters: IOfferedCourseSectionFilterRequest,
  options: IPaginationOptions
) => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: offeredCourseSectionSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      AND: Object.keys(filtersData).map(key => {
        if (offeredCourseSectionRelationalFields.includes(key)) {
          return {
            [offeredCourseSectionRelationalFieldsMapper[key]]: {
              id: (filtersData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filtersData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereCondition: Prisma.OfferedCourseSectionWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.offeredCourseSection.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
    include: {
      offeredCourse: true,
      semesterRegistration: true,
    },
  });

  const total = await prisma.offeredCourseSection.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    date: result,
  };
};

const getSingleOfferedCourseSection = async (id: string) => {
  const result = await prisma.offeredCourseSection.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateOfferedCourseSection = async (
  id: string,
  payload: Partial<OfferedCourseSection>
) => {
  const result = await prisma.offeredCourseSection.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteOfferedCourseSection = async (id: string) => {
  const result = await prisma.offeredCourseSection.delete({
    where: {
      id,
    },
  });

  return result;
};

export const offeredCourseSectionService = {
  createOfferedCourseSection,
  getAllOfferedCourseSection,
  getSingleOfferedCourseSection,
  updateOfferedCourseSection,
  deleteOfferedCourseSection,
};
