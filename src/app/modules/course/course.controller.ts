import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { CourseServices } from './course.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { courseFilterableFields } from './course.constant';
import { paginationFields } from '../../../constants/pagination';

const createCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.createCourse(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course create successfully',
    data: result,
  });
});

const getAllCourses = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, courseFilterableFields);
  const options = pick(req.query, paginationFields);
  const result = await CourseServices.getAllCourses(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.getSingleCourse(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course retrieved successfully',
    data: result,
  });
});

const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.updateCourse(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successfully',
    data: result,
  });
});

const deleteCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.deleteCourse(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course deleted successfully',
    data: result,
  });
});

const assignFaculties = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.assignFaculties(
    req.params.id,
    req.body.faculties
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Assign faculties in a Course successfully',
    data: result,
  });
});


const removeFaculties = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.removeFaculties(
    req.params.id,
    req.body.faculties
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Remove faculties in a Course successfully',
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  assignFaculties,
  removeFaculties,
};
