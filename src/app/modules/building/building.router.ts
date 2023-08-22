import express from 'express';
import { BuildingController } from './building.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingZodValidation } from './building.ZodValidation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/create-building',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(BuildingZodValidation.createBuilding),
  BuildingController.createBuilding
);

router.get('/', BuildingController.getAllBuilding);
router.get('/:id', BuildingController.getSingleBuilding);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(BuildingZodValidation.updateBuilding),
  BuildingController.updateBuilding
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BuildingController.deleteBuilding
);

export const BuildingRouter = router;
