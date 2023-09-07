/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { semesterRegistrationFilterableFields } from './semesterRegistration.constant';
import { SemesterRegistrationServices } from './semesterRegistration.services';

const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationServices.createSemesterRegistration(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester registration created',
      data: result,
    });
  }
);

const getAllSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, semesterRegistrationFilterableFields);
    const options = pick(req.query, paginationFields);
    const result =
      await SemesterRegistrationServices.getAllSemesterRegistration(
        filters,
        options
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester registrations retrieved successfully',
      data: result,
    });
  }
);

const getSingleSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationServices.getSingleSemesterRegistration(
        req.params.id
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester registration retrieved successfully',
      data: result,
    });
  }
);

const updateSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationServices.updateSemesterRegistration(
        req.params.id,
        req.body
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester registration updated successfully',
      data: result,
    });
  }
);

const deleteSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationServices.deleteSemesterRegistration(
        req.params.id
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester registration deleted successfully',
      data: result,
    });
  }
);

const createStudentSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const student = (req as any).user;
    const result =
      await SemesterRegistrationServices.createStudentSemesterRegistration(
        student.userId
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student semester registered successfully',
      data: result,
    });
  }
);

const enrollFromCourse = catchAsync(async (req: Request, res: Response) => {
  const student = (req as any).user;
  const result = await SemesterRegistrationServices.enrollFromCourse(
    student.userId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Enroll course successfully',
    data: result,
  });
});

const withdrewFromCourse = catchAsync(async (req: Request, res: Response) => {
  const student = (req as any).user;
  const result = await SemesterRegistrationServices.withdrewFromCourse(
    student.userId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Enroll course successfully',
    data: result,
  });
});

const confirmCourseRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const student = (req as any).user;
    const result = await SemesterRegistrationServices.confirmCourseRegistration(
      student.userId
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Confirm your registration',
      data: result,
    });
  }
);

const getMyRegistration = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const result = await SemesterRegistrationServices.getMyRegistration(
    user.userId
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My registration data fetched!',
    data: result,
  });
});

const startNewSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationServices.startNewSemester(
    req.params.id
  );
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New semester started successfully!',
    data: result,
  });
});

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistration,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
  deleteSemesterRegistration,
  createStudentSemesterRegistration,
  enrollFromCourse,
  withdrewFromCourse,
  confirmCourseRegistration,
  getMyRegistration,
  startNewSemester,
};
