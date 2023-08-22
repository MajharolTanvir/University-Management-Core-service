import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicDepartmentService } from './academicDepartment.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicDepartmentFilterAbleField } from './academicDepartment.constant';

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
    const filters = pick(req.query, academicDepartmentFilterAbleField);
    const options = pick(req.query, paginationFields);
    const result = await AcademicDepartmentService.getAllAcademicDepartment(
      filters,
      options
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All academic department retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicDepartmentService.getSingleAcademicDepartment(
      req.params.id
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Specific academic department retrieved successfully',
      data: result,
    });
  }
);

const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await AcademicDepartmentService.updateAcademicDepartment(
      id,
      payload
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department updated successfully',
      data: result,
    });
  }
);

const deleteAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicDepartmentService.deleteAcademicDepartment(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department deleted successfully',
      data: result,
    });
  }
);

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment
};
