/* eslint-disable @typescript-eslint/no-explicit-any */
import { OfferedCourse, Prisma } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import {
  IOfferedCourse,
  IOfferedCourseFilterRequest,
} from './offeredCourse.interface';
import { asyncForEach } from '../../../shared/utils';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { offeredCourseRelationalFields, offeredCourseRelationalFieldsMapper, offeredCourseSearchableFields } from './offeredCourse.constant';

const createOfferedCourses = async (
  payload: IOfferedCourse
): Promise<OfferedCourse[]> => {
  const { academicDepartmentId, semesterRegistrationId, courseIds } = payload;
  const result: OfferedCourse[] = [];

  await asyncForEach(courseIds, async (courseId: string) => {
    const isExist = await prisma.offeredCourse.findFirst({
      where: {
        academicDepartmentId,
        semesterRegistrationId,
        courseId,
      },
    });

    if (!isExist) {
      const addOfferedCourses = await prisma.offeredCourse.create({
        data: {
          academicDepartmentId,
          semesterRegistrationId,
          courseId,
        },
        include: {
          academicDepartment: true,
          semesterRegistration: true,
          course: true,
        },
      });
      result.push(addOfferedCourses);
    }
  });

  return result;
};

const getAllOfferedCourses = async (
  filters: IOfferedCourseFilterRequest,
  options: IPaginationOptions
) => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: offeredCourseSearchableFields.map(field => ({
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
          if (offeredCourseRelationalFields.includes(key)) {
            return {
              [offeredCourseRelationalFieldsMapper[key]]: {
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


    const whereConditions: Prisma.OfferedCourseWhereInput =
      andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.offeredCourse.findMany({
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

  const total = await prisma.offeredCourse.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleOfferedCourses = async (id: string) => {
  const result = await prisma.offeredCourse.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateOfferedCourses = async (
  id: string,
  payload: Partial<OfferedCourse>
) => {
  const result = await prisma.offeredCourse.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteOfferedCourses = async (id: string) => {
  const result = await prisma.offeredCourse.delete({
    where: {
      id,
    },
  });

  return result;
};

export const OfferedCourseServices = {
  createOfferedCourses,
  getAllOfferedCourses,
  getSingleOfferedCourses,
  updateOfferedCourses,
  deleteOfferedCourses,
};
