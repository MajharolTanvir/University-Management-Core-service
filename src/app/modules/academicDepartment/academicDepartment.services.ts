import { AcademicDepartment } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const createAcademicDepartment = async (
  payload: AcademicDepartment
): Promise<AcademicDepartment> => {
  const result = await prisma.academicDepartment.create({
    data: payload,
    include: {
      academicFaculty: true
    }
  });
  return result;
};




export const AcademicDepartmentService = {
  createAcademicDepartment,
};
