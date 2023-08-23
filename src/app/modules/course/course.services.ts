/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../shared/prisma';
import { ICourseCreatedData } from './course.interface';

const createCourse = async (data: ICourseCreatedData): Promise<any> => {
  const { preRequisiteCourses, ...courseData } = data;

  const newCourse = await prisma.$transaction(async courseTransaction => {
    const result = await courseTransaction.course.create({
      data: courseData,
    });

    if (!result) {
      throw new ApiError(httpStatus.BAD_GATEWAY, 'Course not created');
    }

    if (preRequisiteCourses && preRequisiteCourses.length > 0) {
      for (let i = 0; i < preRequisiteCourses.length; i++) {
        const createPrerequisite =
          await courseTransaction.courseToPrerequisite.create({
            data: {
              courseId: result.id,
              preRequisiteId: preRequisiteCourses[i].courseId,
            },
          });
        console.log(createPrerequisite);
      }
    }

    return result;
  });

  if (newCourse) {
    const newCourseData = await prisma.course.findUnique({
      where: {
        id: newCourse.id,
      },
      include: {
        preRequisite: {
          include: {
            preRequisite: true,
          },
        },
        preRequisiteFor: {
          include: {
            course: true,
          },
        },
      },
    });

    return newCourseData;
  }

  throw new ApiError(httpStatus.BAD_GATEWAY, 'Course not created');
};

export const CourseServices = {
  createCourse,
};
