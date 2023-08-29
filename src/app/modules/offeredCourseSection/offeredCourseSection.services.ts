import { OfferedCourseSection } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

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

export const offeredCourseSectionService = {
  createOfferedCourseSection,
};
