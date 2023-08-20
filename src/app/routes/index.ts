import express from 'express';
import { academicSemesterRouter } from '../modules/academicSemester/academicSemester.routes';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.router';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semesters',
    routes: academicSemesterRouter,
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRouter,
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
