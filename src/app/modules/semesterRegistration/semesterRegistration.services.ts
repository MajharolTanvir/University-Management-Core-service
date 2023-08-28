import { SemesterRegistration, SemesterRegistrationStatus } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const createSemesterRegistration = async (
  payload: SemesterRegistration
): Promise<SemesterRegistration> => {
    const isAnySemesterRegUpcomingOrOngoing =
      await prisma.semesterRegistration.findFirst({
        where: {
          OR: [
            {
              status: SemesterRegistrationStatus.UPCOMMING,
            },
            {
              status: SemesterRegistrationStatus.ONGOING,
            },
          ],
        },
      });
    
    if (isAnySemesterRegUpcomingOrOngoing) {
        throw new ApiError(httpStatus.BAD_REQUEST, `There is already an ${isAnySemesterRegUpcomingOrOngoing.status} registration`)
    }
      const result = await prisma.semesterRegistration.create({
        data: payload,
      });

  return result;
};

export const SemesterRegistrationServices = {
  createSemesterRegistration,
};
