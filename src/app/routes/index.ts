import express from 'express';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.router';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.router';
import { academicSemesterRouter } from '../modules/academicSemester/academicSemester.router';
import { BuildingRouter } from '../modules/building/building.router';
import { CourseRouter } from '../modules/course/course.router';
import { FacultyRouter } from '../modules/faculty/faculty.router';
import { OfferedCoursesRouter } from '../modules/offerdCourse/offeredCourse.router';
import { OfferedCourseClassScheduleRouter } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.router';
import { OfferedCourseSectionRouter } from '../modules/offeredCourseSection/offeredCourseSection.router';
import { RoomRouter } from '../modules/room/room.router';
import { SemesterRegistrationRouter } from '../modules/semesterRegistration/semesterRegistration.router';
import { StudentRouter } from '../modules/student/student.router';
import { StudentEnrolledCourseMarkRouter } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.router';

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
  {
    path: '/rooms',
    routes: RoomRouter,
  },
  {
    path: '/courses',
    routes: CourseRouter,
  },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationRouter,
  },
  {
    path: '/offered-courses',
    routes: OfferedCoursesRouter,
  },
  {
    path: '/offered-course-sections',
    routes: OfferedCourseSectionRouter,
  },
  {
    path: '/offered-course-class-schedule',
    routes: OfferedCourseClassScheduleRouter,
  },
  {
    path: '/student-enrolled-course-marks',
    routes: StudentEnrolledCourseMarkRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
