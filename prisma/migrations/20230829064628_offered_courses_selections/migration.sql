/*
  Warnings:

  - You are about to drop the column `maxCapasity` on the `offered_course_selection` table. All the data in the column will be lost.
  - You are about to drop the column `semseterRegistrationId` on the `offered_course_selection` table. All the data in the column will be lost.
  - Added the required column `maxCapacity` to the `offered_course_selection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semesterRegistrationId` to the `offered_course_selection` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "offered_course_selection" DROP CONSTRAINT "offered_course_selection_semseterRegistrationId_fkey";

-- AlterTable
ALTER TABLE "offered_course_selection" DROP COLUMN "maxCapasity",
DROP COLUMN "semseterRegistrationId",
ADD COLUMN     "maxCapacity" INTEGER NOT NULL,
ADD COLUMN     "semesterRegistrationId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "offered_course_selection" ADD CONSTRAINT "offered_course_selection_semesterRegistrationId_fkey" FOREIGN KEY ("semesterRegistrationId") REFERENCES "semester_registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
