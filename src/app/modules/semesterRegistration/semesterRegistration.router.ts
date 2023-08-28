import express from 'express'
import { SemesterRegistrationController } from './semesterRegistration.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';


const router = express.Router()

router.post(
    '/create-semester-registration',
    validateRequest(SemesterRegistrationValidation.createSemesterRegistration),
  SemesterRegistrationController.createSemesterRegistration
);

export const SemesterRegistrationRouter = router;