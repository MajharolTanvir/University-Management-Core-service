/*
  Warnings:

  - You are about to drop the column `partialPaymetAmount` on the `student_semester_payment ` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_semester_payment " DROP COLUMN "partialPaymetAmount",
ADD COLUMN     "partialPaymentAmount" INTEGER DEFAULT 0;
