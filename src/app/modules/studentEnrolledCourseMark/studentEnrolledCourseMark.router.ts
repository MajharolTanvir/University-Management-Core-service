import express from 'express';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { StudentEnrolledCourseMarkValidation } from './studentEnrolledCourseMarks.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.getAllStudentCourseMarks
);

router.get(
  '/my-marks',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentEnrolledCourseMarkController.getMyCourseMarks
);


router.patch(
  '/update-marks',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY),
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarks),
  StudentEnrolledCourseMarkController.updateStudentMarks
);

router.patch(
  '/update-final-marks',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY),
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarks),
  StudentEnrolledCourseMarkController.updateStudentFinalMarks
);

export const StudentEnrolledCourseMarkRouter = router;
