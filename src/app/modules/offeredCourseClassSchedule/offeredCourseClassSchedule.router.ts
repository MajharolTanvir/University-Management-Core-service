import express from 'express';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseClassScheduleValidation } from './offeredCourseClassSchedule.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-offered-course-class-schedule',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(
    OfferedCourseClassScheduleValidation.createOfferedCourseClassSchedule
  ),
  OfferedCourseClassScheduleController.createOfferedCourseClassSchedule
);

router.get(
  '/',
  OfferedCourseClassScheduleController.getAllOfferedCourseClassSchedule
);

router.get(
  '/:id',
  OfferedCourseClassScheduleController.getSingleOfferedCourseClassSchedule
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(
    OfferedCourseClassScheduleValidation.createOfferedCourseClassSchedule
  ),
  OfferedCourseClassScheduleController.updateOfferedCourseClassSchedule
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.deleteOfferedCourseClassSchedule
);

export const OfferedCourseClassScheduleRouter = router;
