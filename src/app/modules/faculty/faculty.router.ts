import express from 'express';
import { FacultyController } from './faculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyZodValidation } from './faculty.ZodValidation';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(FacultyZodValidation.create),
  FacultyController.createFaculty
);

router.get('/', FacultyController.getAllFaculty);
router.get('/:id', FacultyController.getSingleFaculty);

export const FacultyRouter = router;
