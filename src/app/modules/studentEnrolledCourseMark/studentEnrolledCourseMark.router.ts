import express from 'express';
import { studentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';

const router = express.Router();



router.get(
  '/',
  studentEnrolledCourseMarkController.getAllStudentCourseMarks
);

router.patch(
  '/update-marks',
  studentEnrolledCourseMarkController.updateStudentMarks
);

router.patch(
  '/update-final-marks',
  studentEnrolledCourseMarkController.updateStudentFinalMarks
);

export const StudentEnrolledCourseMarkRouter = router;
