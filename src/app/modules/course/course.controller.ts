import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { CourseServices } from './course.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.createCourse(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course create successfully',
    data: result,
  });
});

export const CourseController = {
  createCourse,
};
