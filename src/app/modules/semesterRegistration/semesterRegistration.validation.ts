import { z } from 'zod';

const createSemesterRegistration = z.object({
  body: z.object({
    startDate: z.string({
      required_error: 'Start date is required',
    }),
    endDate: z.string({
      required_error: 'End date is required',
    }),
    minCredit: z.number({
      required_error: 'Minimum credit is required',
    }),
    maxCredit: z.number({
      required_error: 'Maximum credit is required',
    }),
    academicSemesterId: z.string({
      required_error: 'Academic semester id is required',
    }),
  }),
});

const updateSemesterRegistration = z.object({
  body: z.object({
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    minCredit: z.number().optional(),
    maxCredit: z.number().optional(),
    academicSemesterId: z.string().optional(),
  }),
});

export const SemesterRegistrationValidation = {
  createSemesterRegistration,
  updateSemesterRegistration,
};
