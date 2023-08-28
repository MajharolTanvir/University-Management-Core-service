export type ISemesterRegistrationFilterRequest = {
  searchTerm?: string | undefined;
  minCredit?: number;
  maxCredit?: number;
  academicSemesterId?: string;
};
