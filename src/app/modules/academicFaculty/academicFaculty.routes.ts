import express from 'express'
import { AcademicFacultyController } from './academicFaculty.controller';


const router = express.Router()

router.post('/create-faculty', AcademicFacultyController.createAcademicFaculty)
router.get('/:id', AcademicFacultyController.getSingleAcademicFaculty);
router.get('/', AcademicFacultyController.getAllAcademicFaculty)


export const AcademicFacultyRouter = router;