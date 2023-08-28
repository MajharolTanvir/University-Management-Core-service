import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { SemesterRegistrationServices } from './semesterRegistration.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemesterRegistration = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationServices.createSemesterRegistration(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester registration created',
    data: result,
  });
});



export const SemesterRegistrationController = {
  createSemesterRegistration,
};