export const semesterRegistrationFilterableFields: string[] = [
  'searchTerm',
  'academicSemesterId',
];

export const semesterRegistrationSearchableFields: string[] = ['academicSemesterId', 'startDate', 'endDate'];

export const semesterRegistrationRelationalFields: string[] = ['academicSemesterId'];
export const semesterRegistrationRelationalFieldsMapper: { [key: string]: string } = {
  academicSemesterId: 'academicSemester',
};
