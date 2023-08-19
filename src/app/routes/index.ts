import express from 'express';
import { academicSemesterRouter } from '../modules/academicSemester/academicSemester.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/academic-semesters",
    routes: academicSemesterRouter
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
