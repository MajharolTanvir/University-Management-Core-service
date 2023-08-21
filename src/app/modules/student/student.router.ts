import express from 'express';
import { StudentsController } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { StudentZodValidation } from './student.zodValidation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(StudentZodValidation.createStudent),
  StudentsController.createStudent
);

router.get('/', StudentsController.getAllStudent);

router.get('/:id', StudentsController.getSingleStudent);

export const StudentRoutes = router;
