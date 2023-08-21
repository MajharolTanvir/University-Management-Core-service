import express from 'express';
import { academicSemesterRouter } from '../modules/academicSemester/academicSemester.routes';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.router';
import { StudentRoutes } from '../modules/student/student.router';

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
  {
    path: '/students',
    routes: StudentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
