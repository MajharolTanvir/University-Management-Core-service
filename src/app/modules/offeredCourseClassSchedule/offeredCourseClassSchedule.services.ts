import { OfferedCourseClassSchedule } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import { OfferedCourseClassScheduleUtils } from './offeredCourseClassSchedule.utils';

const createOfferedCourseClassSchedule = async (
  payload: OfferedCourseClassSchedule
): Promise<OfferedCourseClassSchedule> => {
  await OfferedCourseClassScheduleUtils.checkedRoomAvailable(payload);

  const result = await prisma.offeredCourseClassSchedule.create({
    data: payload,
    include: {
      room: true,
      faculty: true,
      offeredCourseSection: true,
      semesterRegistration: true,
    },
  });

  return result;
};

export const OfferedCourseClassScheduleService = {
  createOfferedCourseClassSchedule,
};
