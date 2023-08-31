/*
  Warnings:

  - You are about to drop the column `offeredCourseSectioId` on the `offered_course_class_schedule` table. All the data in the column will be lost.
  - Added the required column `offeredCourseSectionId` to the `offered_course_class_schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "offered_course_class_schedule" DROP CONSTRAINT "offered_course_class_schedule_offeredCourseSectioId_fkey";

-- AlterTable
ALTER TABLE "offered_course_class_schedule" DROP COLUMN "offeredCourseSectioId",
ADD COLUMN     "offeredCourseSectionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "offered_course_class_schedule" ADD CONSTRAINT "offered_course_class_schedule_offeredCourseSectionId_fkey" FOREIGN KEY ("offeredCourseSectionId") REFERENCES "offered_course_selection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
