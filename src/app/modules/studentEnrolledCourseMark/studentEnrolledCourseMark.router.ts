import express from 'express';
import { studentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';

const router = express.Router();

router.patch(
  '/update-marks',
  studentEnrolledCourseMarkController.updateStudentMarks
);

export const StudentEnrolledCourseMarkRouter = router;
