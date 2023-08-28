import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.controller';
import { CourseZodValidation } from './course.ZodValidation';

const router = express.Router();

router.post(
  '/create-course',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(CourseZodValidation.createCourses),
  CourseController.createCourse
);

router.get('/', CourseController.getAllCourses);

router.get('/:id', CourseController.getSingleCourse);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(CourseZodValidation.updateCourses),
  CourseController.updateCourse
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.deleteCourse
);


router.post(
  '/:id/assign-faculties',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.assignFaculties
);

export const CourseRouter = router;
