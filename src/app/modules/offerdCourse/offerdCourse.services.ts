import { OfferedCourse } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import { IOfferedCourse } from './offerdCourse.interface';
import { asyncForEach } from '../../../shared/utils';

const createOfferedCourses = async (
  payload: IOfferedCourse
): Promise<OfferedCourse> => {
  const { academicDepartmentId, semesterRegistrationId, courseIds } = payload;

  const result: any = [];
  await asyncForEach(courseIds, async (courseId: string) => {
    const addOfferedCourses = await prisma.offeredCourse.create({
      data: {
        academicDepartmentId,
        semesterRegistrationId,
        courseId,
      },
    });
    result.push(addOfferedCourses);
  });

  return result;
};

export const OfferedCourseServices = {
  createOfferedCourses,
};
