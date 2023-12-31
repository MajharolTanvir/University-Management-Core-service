import { z } from 'zod';

const createStudent = z.object({
  body: z.object({
    studentId: z.string({
      required_error: 'Student ID is required',
    }),
    firstName: z.string({
      required_error: 'First name is required',
    }),
    middleName: z.string({
      required_error: 'Middle name is required',
    }),
    lastName: z.string({
      required_error: 'Last name is required',
    }),
    profileImage: z.string({
      required_error: 'Profile image is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    contactNo: z.string({
      required_error: 'Contact no is required',
    }),
    gender: z.string({
      required_error: 'Gender is required',
    }),
    bloodGroup: z.string({
      required_error: 'Blood group is required',
    }),
    academicSemesterId: z.string({
      required_error: 'Academic semester id is required',
    }),
    academicFacultyId: z.string({
      required_error: 'Academic faculty id is required',
    }),
    academicDepartmentId: z.string({
      required_error: 'Academic department id is required',
    }),
  }),
});

const updateStudent = z.object({
  body: z.object({
    studentId: z.string().optional(),
    firstName: z.string().optional(),
    middleName: z.string().optional(),
    lastName: z.string().optional(),
    profileImage: z.string().optional(),
    email: z.string().optional(),
    contactNo: z.string().optional(),
    gender: z.string().optional(),
    bloodGroup: z.string().optional(),
    academicSemesterId: z.string().optional(),
    academicFacultyId: z.string().optional(),
    academicDepartmentId: z.string().optional(),
  }),
});

export const StudentZodValidation = {
  createStudent,
  updateStudent,
};
