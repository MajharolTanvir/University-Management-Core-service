/*
  Warnings:

  - You are about to drop the column `semesterRegistraionId` on the `offered_course_class_schedule` table. All the data in the column will be lost.
  - Added the required column `semesterRegistrationId` to the `offered_course_class_schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "offered_course_class_schedule" DROP CONSTRAINT "offered_course_class_schedule_semesterRegistraionId_fkey";

-- AlterTable
ALTER TABLE "offered_course_class_schedule" DROP COLUMN "semesterRegistraionId",
ADD COLUMN     "semesterRegistrationId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "offered_course_class_schedule" ADD CONSTRAINT "offered_course_class_schedule_semesterRegistrationId_fkey" FOREIGN KEY ("semesterRegistrationId") REFERENCES "semester_registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
