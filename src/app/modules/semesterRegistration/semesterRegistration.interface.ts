export type ISemesterRegistrationFilterRequest = {
  searchTerm?: string | undefined;
  minCredit?: number;
  maxCredit?: number;
  academicSemesterId?: string;
};

export type IEnrollCoursePayload = {
  offeredCourseId: string;
  offeredCourseSectionId: string;
};