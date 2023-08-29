import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { OfferedCourseServices } from './offerdCourse.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createOfferedCourses = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseServices.createOfferedCourses(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered courses created successfully',
    data: result,
  });
});

export const OfferedCoursesController = {
  createOfferedCourses,
};
