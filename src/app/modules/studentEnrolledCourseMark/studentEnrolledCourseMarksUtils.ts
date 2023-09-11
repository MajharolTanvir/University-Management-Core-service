/* eslint-disable no-unused-expressions */
import { Course, StudentEnrolledCourse } from '@prisma/client';

const getGradeForMarks = (marks: number) => {
  let result = {
    grade: '',
    point: 0,
  };

  if (marks <= 39) {
    result = {
      grade: 'F',
      point: 0,
    };
  } else if (marks >= 40 && marks <= 49) {
    result = {
      grade: 'D',
      point: 2.5,
    };
  } else if (marks >= 50 && marks <= 59) {
    result = {
      grade: 'C',
      point: 3.0,
    };
  } else if (marks >= 60 && marks <= 69) {
    result = {
      grade: 'B',
      point: 3.5,
    };
  } else if (marks >= 70 && marks <= 79) {
    result = {
      grade: 'A-',
      point: 3.0,
    };
  } else if (marks >= 80 && marks <= 89) {
    result = {
      grade: 'A',
      point: 3.5,
    };
  } else if (marks >= 90 && marks <= 100) {
    result = {
      grade: 'A+',
      point: 4.0,
    };
  }

  return result;
};

const calcCGPAandGrade = (
  payload: (StudentEnrolledCourse & { course: Course })[]
) => {
  if (payload.length === 0) {
    return {
      totalCompletedCourse: 0,
      cgpa: 0,
    };
  }

  let totalPoint = 0;
  let totalCGPA = 0;

  for (const grade of payload) {
    (totalCGPA += grade.point || 0), (totalPoint += grade.course.credits || 0);
  }

  const avgCGPA = Number((totalCGPA / payload.length).toFixed(2));

  return {
    cgpa: avgCGPA,
    totalCompletedCredit: totalPoint,
  };
};

export const StudentEnrolledCourseMarksUtils = {
  getGradeForMarks,
  calcCGPAandGrade,
};
