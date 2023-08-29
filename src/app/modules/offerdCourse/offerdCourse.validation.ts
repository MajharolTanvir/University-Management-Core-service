import { z } from 'zod';

const createOfferedCourses = z.object({
  body: z.object({
    courseIds: z.array(),
    academicDepartmentId: z.string({
      required_error: 'Academic department id is required',
    }),
    semesterRegistrationId: z.string({
      required_error: 'Semester registration id is required',
    }),
  }),
});

export const OfferedCourseValidation = {
  createOfferedCourses,
};
