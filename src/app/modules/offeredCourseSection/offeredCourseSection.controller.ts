import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { offeredCourseSectionService } from './offeredCourseSection.services';

const createOfferedCourseSection = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result = await offeredCourseSectionService.createOfferedCourseSection(
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offered course section created successfully',
      data: result,
    });
  }
);

const getAllOfferedCourseSection = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result =
      await offeredCourseSectionService.getAllOfferedCourseSection();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offered course sections retrieved successfully',
      data: result,
    });
  }
);

const getSingleOfferedCourseSection = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result =
      await offeredCourseSectionService.getSingleOfferedCourseSection(
        req.params.id
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offered course section retrieved successfully',
      data: result,
    });
  }
);

const updateOfferedCourseSection = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result = await offeredCourseSectionService.updateOfferedCourseSection(
      req.params.id,
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offered course section updated successfully',
      data: result,
    });
  }
);

const deleteOfferedCourseSection = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result = await offeredCourseSectionService.deleteOfferedCourseSection(
      req.params.id
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offered course section deleted successfully',
      data: result,
    });
  }
);

export const OfferedCourseSectionController = {
  createOfferedCourseSection,
  getAllOfferedCourseSection,
  getSingleOfferedCourseSection,
  updateOfferedCourseSection,
  deleteOfferedCourseSection,
};
