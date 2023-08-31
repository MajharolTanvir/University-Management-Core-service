import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { OfferedCourseClassScheduleService } from "./offeredCourseClassSchedule.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";




const createOfferedCourseClassSchedule = catchAsync(
    async (req: Request, res: Response) => {
        const result = await OfferedCourseClassScheduleService.createOfferedCourseClassSchedule(req.body)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Offered course class schedule created successfully",
            data: result
        })
    }
);


export const OfferedCourseClassScheduleController = {
    createOfferedCourseClassSchedule
} 