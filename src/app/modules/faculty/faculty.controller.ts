import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { FacultyService } from './faculty.services';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { facultyFilterableFields } from './faculty.constant';
import { Request, Response } from 'express';
import { paginationFields } from '../../../constants/pagination';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.createFaculty(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty created successfully',
    data: result,
  });
});

const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, facultyFilterableFields);
  const options = pick(req.query, paginationFields);
  const result = await FacultyService.getAllFaculty(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all faculties retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FacultyService.getSingleFaculty(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single faculty retrieved successfully',
    data: result,
  });
});

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FacultyService.updateFaculty(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty updated successfully',
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FacultyService.deleteFaculty(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty deleted successfully',
    data: result,
  });
});

export const FacultyController = {
  createFaculty,
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty
};
