import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicSemesterService } from './academicSemester.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { AcademicSemesterFilterableField } from './academicSemester.constant';
import { paginationFields } from '../../../constants/pagination';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.createAcademicSemester(
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester create successfully',
      data: result,
    });
  }
);

const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, AcademicSemesterFilterableField);
    const options = pick(req.query, paginationFields);
    const result = await AcademicSemesterService.getAllAcademicSemester(
      filters,
      options
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester get successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.getSingleAcademicSemester(
      req.params.id
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single academic semester get successfully',
      data: result,
    });
  }
);

const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.updateAcademicSemester(
      req.params.id,
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester updated successfully',
      data: result,
    });
  }
);

const deleteAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.deleteAcademicSemester(
      req.params.id
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester deleted successfully',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
  deleteAcademicSemester,
};
