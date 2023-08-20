import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicDepartmentService } from './academicDepartment.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicDepartmentService.createAcademicDepartment(
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Create academic department successfully',
      data: result,
    });
  }
);






export const AcademicDepartmentController = {
  createAcademicDepartment,
};
