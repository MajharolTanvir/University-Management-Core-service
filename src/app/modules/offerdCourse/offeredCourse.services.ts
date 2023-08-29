/* eslint-disable @typescript-eslint/no-explicit-any */
import { OfferedCourse } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import { IOfferedCourse } from './offeredCourse.interface';
import { asyncForEach } from '../../../shared/utils';

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

export const OfferedCourseServices = {
  createOfferedCourses,
};
