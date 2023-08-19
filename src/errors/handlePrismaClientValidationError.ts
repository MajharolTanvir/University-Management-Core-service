import { PrismaClientValidationError } from '@prisma/client/runtime/library';

const handlePrismaClientValidationError = (
  error: PrismaClientValidationError
) => {
  console.log('error', error);
};

export default handlePrismaClientValidationError;
