import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { BuildingService } from './building.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { buildingFilterAbleField } from './building.constant';

const createBuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.createBuilding(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Buildings created successfully',
    data: result,
  });
});

const getAllBuilding = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, buildingFilterAbleField);
  const options = pick(req.query, paginationFields);
  const result = await BuildingService.getAllBuilding(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Buildings retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleBuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.getSingleBuilding(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building retrieved successfully',
    data: result,
  });
});

const updateBuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.updateBuilding(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building updated successfully',
    data: result,
  });
});

const deleteBuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.deleteBuilding(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building deleted successfully',
    data: result,
  });
});

export const BuildingController = {
  createBuilding,
  getAllBuilding,
  getSingleBuilding,
  updateBuilding,
  deleteBuilding,
};
