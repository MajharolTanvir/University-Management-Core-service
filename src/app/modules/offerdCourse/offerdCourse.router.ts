import express from 'express';
import { OfferedCoursesController } from './offerdCourse.controller';

const router = express.Router();

router.post('/create-offered-courses', OfferedCoursesController.createOfferedCourses)

export const OfferedCoursesRouter = router;
