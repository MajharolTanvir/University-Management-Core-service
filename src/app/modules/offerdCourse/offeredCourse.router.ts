import express from 'express';
import { OfferedCoursesController } from './offeredCourse.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseValidation } from './offeredCourse.validation';

const router = express.Router();

router.post(
  '/create-offered-courses',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(OfferedCourseValidation.createOfferedCourses),
  OfferedCoursesController.createOfferedCourses
);

export const OfferedCoursesRouter = router;
