import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { hasTimeConflict } from "../../../shared/utils";
import { prisma } from "../../../shared/prisma";
import { OfferedCourseClassSchedule } from "@prisma/client";



const checkedRoomAvailable = async (payload: OfferedCourseClassSchedule) => {
  const alreadyBookedRoomOnDay =
    await prisma.offeredCourseClassSchedule.findMany({
      where: {
        dayOfWeek: payload.dayOfWeek,
        room: {
          id: payload.roomId,
        },
      },
    });

  const existingSlot = await alreadyBookedRoomOnDay.map(schedule => ({
    startTime: schedule.startTime,
    endTime: schedule.endTime,
    room: schedule.roomId,
  }));

  const newSlot = {
    startTime: payload.startTime,
    endTime: payload.endTime,
    room: payload.roomId,
  };

  if (hasTimeConflict(existingSlot, newSlot)) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'The time and room is already booked for another class'
    );
  }
};  


export const OfferedCourseClassScheduleUtils = {
  checkedRoomAvailable,
};