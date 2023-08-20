import express from 'express'
import { AcademicDepartmentController } from './academicDepartment.controller'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicDepartmentZodValidation } from './academicDepartment.ZodValidation'


const router = express.Router()

router.post('/create-department', validateRequest(AcademicDepartmentZodValidation.createAcademicDepartment), AcademicDepartmentController.createAcademicDepartment)
router.get('/', AcademicDepartmentController.getAllAcademicDepartment)
router.get('/:id', AcademicDepartmentController.getSingleAcademicDepartment)


export const AcademicDepartmentRouter = router