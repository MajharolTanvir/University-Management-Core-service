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

router.get('/', OfferedCoursesController.getAllOfferedCourses);

router.get('/:id', OfferedCoursesController.getSingleOfferedCourses);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(OfferedCourseValidation.updateOfferedCourses),
  OfferedCoursesController.updateOfferedCourses
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCoursesController.deleteOfferedCourses
);

export const OfferedCoursesRouter = router;
