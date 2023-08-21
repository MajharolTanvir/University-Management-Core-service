import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyZodValidation } from './academicFaculty.ZodValidation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/create-faculty',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(AcademicFacultyZodValidation.createAcademicFaculty),
  AcademicFacultyController.createAcademicFaculty
);
router.get('/:id', AcademicFacultyController.getSingleAcademicFaculty);
router.get('/', AcademicFacultyController.getAllAcademicFaculty);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(AcademicFacultyZodValidation.updateAcademicFaculty),
  AcademicFacultyController.updatedAcademicFaculty
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicFacultyController.deletedAcademicFaculty
);

export const AcademicFacultyRouter = router;
