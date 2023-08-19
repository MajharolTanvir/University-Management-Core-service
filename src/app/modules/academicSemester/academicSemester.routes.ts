import express from 'express'
import { AcademicSemesterController } from './academicSemester.controller'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemesterValidation } from './academicSemester.ZodValidation'

const router = express.Router()


router.post('/create-semester',
    validateRequest(AcademicSemesterValidation.create),
    AcademicSemesterController.createAcademicSemester)

router.get(
  '/',
  AcademicSemesterController.getAllAcademicSemester
);

router.get('/:id', AcademicSemesterController.getSingleAcademicSemester);

export const academicSemesterRouter = router