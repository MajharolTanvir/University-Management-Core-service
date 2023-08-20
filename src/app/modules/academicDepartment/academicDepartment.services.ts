import { AcademicDepartment, Prisma } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IAcademicDepartmentFilterableFiled } from './academicDepartment.Interface';
import { IGenericResponse } from '../../../interfaces/common';

const createAcademicDepartment = async (
  payload: AcademicDepartment
): Promise<AcademicDepartment> => {
  const result = await prisma.academicDepartment.create({
    data: payload,
    include: {
      academicFaculty: true,
    },
  });
  return result;
};

const getAllAcademicDepartment = async (
  filters: IAcademicDepartmentFilterableFiled,
  options: IPaginationOptions
): Promise<IGenericResponse<AcademicDepartment[]>> => {
  const { searchTerm, ...filterData } = filters;
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: ['title'].map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.AcademicDepartmentWhereInput = andConditions.length > 0 ? {AND: andConditions} : {}

  const result = await prisma.academicDepartment.findMany({
    where: whereCondition,
    skip,
    take: limit,
  });

  const total = await prisma.academicDepartment.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

export const AcademicDepartmentService = {
  createAcademicDepartment,
  getAllAcademicDepartment,
};
