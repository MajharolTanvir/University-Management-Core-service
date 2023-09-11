/*
  Warnings:

  - You are about to drop the column `totalCompleteCradit` on the `student_academic_infos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_academic_infos" DROP COLUMN "totalCompleteCradit",
ADD COLUMN     "totalCompletedCredit" INTEGER DEFAULT 0;
