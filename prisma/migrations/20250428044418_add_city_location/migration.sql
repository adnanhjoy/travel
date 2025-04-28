/*
  Warnings:

  - Added the required column `city_location` to the `Airport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `airport` ADD COLUMN `city_location` VARCHAR(191) NOT NULL;
