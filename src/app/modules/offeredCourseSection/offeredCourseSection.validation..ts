import { z } from 'zod';

const createOfferedCourseSection = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    maxCapacity: z.number({
      required_error: 'Maximum capacity is required',
    }),
    offeredCourseId: z.string({
      required_error: 'Offered course id is required',
    }),
  }),
});

const updateOfferedCourseSection = z.object({
  body: z.object({
    title: z.string().optional(),
    maxCapacity: z.number().optional(),
    currentlyEnrolledStudent: z.number().optional(),
    offeredCourseId: z.string().optional(),
    semesterRegistrationId: z.string().optional(),
  }),
});

export const OfferedCourseSectionValidation = {
  createOfferedCourseSection,
  updateOfferedCourseSection,
};
