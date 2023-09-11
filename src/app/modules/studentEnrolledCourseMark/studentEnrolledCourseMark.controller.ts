import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { studentEnrolledCourseMarkServices } from './studentEnrolledCourseMark.services';
import pick from '../../../shared/pick';
import { studentEnrolledCourseMarkFilterableFields } from './studentEnrolledCourseMark.constant';

const getAllStudentCourseMarks = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, studentEnrolledCourseMarkFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result =
      await studentEnrolledCourseMarkServices.getAllStudentCourseMarks(
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
  const result = await studentEnrolledCourseMarkServices.updateStudentMarks(
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
      await studentEnrolledCourseMarkServices.updateStudentFinalMarks(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student course final mark updated successfully',
      data: result,
    });
  }
);

export const studentEnrolledCourseMarkController = {
  getAllStudentCourseMarks,
  updateStudentMarks,
  updateStudentFinalMarks,
};
