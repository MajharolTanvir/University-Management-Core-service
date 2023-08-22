import express from 'express';
import { academicSemesterRouter } from '../modules/academicSemester/academicSemester.router';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.router';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.router';
import { StudentRouter } from '../modules/student/student.router';
import { FacultyRouter } from '../modules/faculty/faculty.router';
import { BuildingRouter } from '../modules/building/building.router';

const router = express.Router();

const moduleRoutes = [
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
    routes: StudentRouter,
  },
  {
    path: '/faculties',
    routes: FacultyRouter,
  },
  {
    path: '/buildings',
    routes: BuildingRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
