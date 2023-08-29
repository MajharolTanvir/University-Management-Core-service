export const offeredCourseSectionFilterableFields = [
  'searchTerm',
  'title',
  'offeredCourseId',
  'semesterRegistrationId',
];

export const offeredCourseSectionSearchableFields: string[] = [];

export const offeredCourseSectionRelationalFields: string[] = [
  'offeredCourseId',
  'semesterRegistrationId',
];
export const offeredCourseSectionRelationalFieldsMapper: {
  [key: string]: string;
} = {
  offeredCourseId: 'offeredCourse',
  semesterRegistrationId: 'semesterRegistration',
};