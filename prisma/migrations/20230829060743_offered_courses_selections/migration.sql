/*
  Warnings:

  - The `currentlyEnrolledStudent` column on the `offered_course_selection` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `maxCapasity` on the `offered_course_selection` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "offered_course_selection" DROP COLUMN "maxCapasity",
ADD COLUMN     "maxCapasity" INTEGER NOT NULL,
DROP COLUMN "currentlyEnrolledStudent",
ADD COLUMN     "currentlyEnrolledStudent" INTEGER NOT NULL DEFAULT 0;
