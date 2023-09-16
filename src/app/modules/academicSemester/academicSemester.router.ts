import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.ZodValidation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllAcademicSemester);

router.post(
  '/create-semester',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.createAcademicSemester
);


router.get('/:id', AcademicSemesterController.getSingleAcademicSemester);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(AcademicSemesterValidation.update),
  AcademicSemesterController.updateAcademicSemester
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterController.deleteAcademicSemester
);

export const academicSemesterRouter = router;
