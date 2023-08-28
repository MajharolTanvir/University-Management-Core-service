/*
  Warnings:

  - You are about to drop the column `maxCradit` on the `semester_registration` table. All the data in the column will be lost.
  - You are about to drop the column `minCradit` on the `semester_registration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "semester_registration" DROP COLUMN "maxCradit",
DROP COLUMN "minCradit",
ADD COLUMN     "maxCredit" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "minCredit" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "status" SET DEFAULT 'UPCOMMING';
