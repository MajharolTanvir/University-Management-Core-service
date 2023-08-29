-- CreateTable
CREATE TABLE "offered_course_selection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "maxCapasity" TEXT NOT NULL,
    "currentlyEnrolledStudent" TEXT NOT NULL,
    "offeredCourseId" TEXT NOT NULL,
    "semseterRegistrationId" TEXT NOT NULL,

    CONSTRAINT "offered_course_selection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "offered_course_selection" ADD CONSTRAINT "offered_course_selection_offeredCourseId_fkey" FOREIGN KEY ("offeredCourseId") REFERENCES "offered_courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offered_course_selection" ADD CONSTRAINT "offered_course_selection_semseterRegistrationId_fkey" FOREIGN KEY ("semseterRegistrationId") REFERENCES "semester_registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
