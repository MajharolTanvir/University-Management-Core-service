import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicDepartmentService } from './academicDepartment.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';

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


const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, ['searchTerm', 'title'])
    const options = pick(req.query, ['page', 'limit', 'sortOrder', 'sortBy'])
    const result = await AcademicDepartmentService.getAllAcademicDepartment(
      filters, options
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get all academic department successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);




export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
};
