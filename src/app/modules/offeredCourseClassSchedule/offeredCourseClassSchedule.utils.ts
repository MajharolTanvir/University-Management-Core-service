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
    throw new ApiError(httpStatus.CONFLICT, 'Room is already booked!');
  }
};  

const checkedFacultyAvailable = async (payload: OfferedCourseClassSchedule) => {
  const alreadyFacultyAssigned =
    await prisma.offeredCourseClassSchedule.findMany({
      where: {
        dayOfWeek: payload.dayOfWeek,
        faculty: {
          id: payload.facultyId,
        },
      },
    });

  const existingSlot = await alreadyFacultyAssigned.map(schedule => ({
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
    throw new ApiError(httpStatus.CONFLICT, 'Faculty is already assigned!');
  }
};  


export const OfferedCourseClassScheduleUtils = {
  checkedRoomAvailable,
  checkedFacultyAvailable,
};