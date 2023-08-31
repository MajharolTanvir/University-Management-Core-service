export const OfferedCourseClassScheduleSearchableFields = ['dayOfWeek'];

export const OfferedCourseClassScheduleRelationalFields = [
  'facultyId',
  'roomId',
  'offeredCourseSectionId',
  'semesterRegistrationId',
];

export const OfferedCourseClassScheduleRelationalFieldsMapper: {
  [key: string]: string;
} = {
  facultyId: 'faculty',
  roomId: 'room',
  offeredCourseSectionId: 'offeredCourseSection',
  semesterRegistrationId: 'semesterRegistration',
};

export const IOfferedCourseClassScheduleFilterRequest = [
  'searchTerm',
  'dayOfWeek',
  'facultyId',
  'roomId',
  'offeredCourseSectionId',
  'semesterRegistrationId',
];

export const daysInWeek = [
  'SATURDAY',
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
];
