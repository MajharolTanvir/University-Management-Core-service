import { z } from 'zod';

const createOfferedCourseSection = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    maxCapacity: z.string({
      required_error: 'Maximum capacity is required',
    }),
    currentlyEnrolledStudent: z.string({
      required_error: 'Currently enrolled student is required',
    }),
    offeredCourseId: z.string({
      required_error: 'Offered course id is required',
    }),
    semesterRegistrationId: z.string({
      required_error: 'Semester registration id is required',
    }),
  }),
});

const updateOfferedCourseSection = z.object({
  body: z.object({
    title: z.string().optional(),
    maxCapacity: z.string().optional(),
    currentlyEnrolledStudent: z.string().optional(),
    offeredCourseId: z.string().optional(),
    semesterRegistrationId: z.string().optional(),
  }),
});

export const OfferedCourseSectionValidation = {
  createOfferedCourseSection,
  updateOfferedCourseSection,
};
