import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IOfferedCourseClassScheduleFilterRequest } from './offeredCourseClassSchedule.constant';

const createOfferedCourseClassSchedule = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await OfferedCourseClassScheduleService.createOfferedCourseClassSchedule(
        req.body
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offered course class schedule created successfully',
      data: result,
    });
  }
);

const getAllOfferedCourseClassSchedule = catchAsync(
    async (req: Request, res: Response) => {
        const filters = pick(
          req.query,
          IOfferedCourseClassScheduleFilterRequest
        );
        const options = pick(req.query, paginationFields);
    const result =
      await OfferedCourseClassScheduleService.getAllOfferedCourseClassSchedule(
        filters,
        options
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offered course class schedules retrieved successfully',
      data: result,
    });
  }
);

const getSingleOfferedCourseClassSchedule = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await OfferedCourseClassScheduleService.getSingleOfferedCourseClassSchedule(
        req.params.id
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offered course class schedule retrieved successfully',
      data: result,
    });
  }
);

export const OfferedCourseClassScheduleController = {
  createOfferedCourseClassSchedule,
  getAllOfferedCourseClassSchedule,
  getSingleOfferedCourseClassSchedule,
};
