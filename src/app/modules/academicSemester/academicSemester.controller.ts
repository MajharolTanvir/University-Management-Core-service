import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { AcademicSemesterFilterableField } from './academicSemester.constant';

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
        const filters = pick(req.query, AcademicSemesterFilterableField )
        const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
        const result = await AcademicSemesterService.getAllAcademicSemester(filters, options);

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
      data: result
    });
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
};
