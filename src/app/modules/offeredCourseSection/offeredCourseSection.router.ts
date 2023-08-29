import express from 'express';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseSectionValidation } from './offeredCourseSection.validation.';

const router = express.Router();

router.post(
  '/create-offered-course-section',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(OfferedCourseSectionValidation.createOfferedCourseSection),
  OfferedCourseSectionController.createOfferedCourseSection
);

router.get('/', OfferedCourseSectionController.getAllOfferedCourseSection);

router.get(
  '/:id',
  OfferedCourseSectionController.getSingleOfferedCourseSection
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(OfferedCourseSectionValidation.updateOfferedCourseSection),
  OfferedCourseSectionController.updateOfferedCourseSection
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseSectionController.deleteOfferedCourseSection
);

export const OfferedCourseSectionRouter = router;
