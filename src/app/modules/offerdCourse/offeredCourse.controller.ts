import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { OfferedCourseServices } from './offeredCourse.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { offeredCourseFilterableFields } from './offeredCourse.constant';

const createOfferedCourses = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseServices.createOfferedCourses(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered courses created successfully',
    data: result,
  });
});

const getAllOfferedCourses = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, offeredCourseFilterableFields);
  const options = pick(req.query, paginationFields);
  const result = await OfferedCourseServices.getAllOfferedCourses(
    filters,
    options
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered courses retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleOfferedCourses = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OfferedCourseServices.getSingleOfferedCourses(
      req.params.id
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offered course retrieved successfully',
      data: result,
    });
  }
);

const updateOfferedCourses = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseServices.updateOfferedCourses(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered course updated successfully',
    data: result,
  });
});

const deleteOfferedCourses = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseServices.deleteOfferedCourses(
    req.params.id
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered course deleted successfully',
    data: result,
  });
});

export const OfferedCoursesController = {
  createOfferedCourses,
  getAllOfferedCourses,
  getSingleOfferedCourses,
  updateOfferedCourses,
  deleteOfferedCourses,
};
