/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { StudentEnrolledCourseMarkServices } from './studentEnrolledCourseMark.services';
import pick from '../../../shared/pick';
import { studentEnrolledCourseMarkFilterableFields } from './studentEnrolledCourseMark.constant';
import { paginationFields } from '../../../constants/pagination';

const getAllStudentCourseMarks = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, studentEnrolledCourseMarkFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result =
      await StudentEnrolledCourseMarkServices.getAllStudentCourseMarks(
        filters,
        options
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student course marks retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const updateStudentMarks = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseMarkServices.updateStudentMarks(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student course mark  updated successfully',
    data: result,
  });
});

const updateStudentFinalMarks = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await StudentEnrolledCourseMarkServices.updateStudentFinalMarks(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student course final mark updated successfully',
      data: result,
    });
  }
);

const getMyCourseMarks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentEnrolledCourseMarkFilterableFields);
  const options = pick(req.query, paginationFields);
  const user = (req as any).user;

  const result = await StudentEnrolledCourseMarkServices.getMyCourseMarks(
    filters,
    options,
    user
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student course marks fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const StudentEnrolledCourseMarkController = {
  getAllStudentCourseMarks,
  updateStudentMarks,
  updateStudentFinalMarks,
  getMyCourseMarks,
};
