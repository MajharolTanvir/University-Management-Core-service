import express from 'express';
import { StudentsController } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { StudentZodValidation } from './student.zodValidation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/create-student',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(StudentZodValidation.createStudent),
  StudentsController.createStudent
);

router.get(
  '/my-course-schedules',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentsController.getMyCourseSchedules
);
router.get(
  '/my-academic-info',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentsController.myAcademicInfo
);


router.get('/', StudentsController.getAllStudent);

router.get('/my-courses',auth(ENUM_USER_ROLE.STUDENT), StudentsController.myCourses);


router.get('/:id', StudentsController.getSingleStudent);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(StudentZodValidation.updateStudent),
  StudentsController.updateStudent
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentsController.deleteStudent
);


export const StudentRouter = router;
