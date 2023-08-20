import express from 'express'
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyZodValidation } from './academicFaculty.ZodValidation';


const router = express.Router()

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyZodValidation.createAcademicFaculty),
  AcademicFacultyController.createAcademicFaculty
);
router.get('/:id', AcademicFacultyController.getSingleAcademicFaculty);
router.get('/', AcademicFacultyController.getAllAcademicFaculty)


export const AcademicFacultyRouter = router;