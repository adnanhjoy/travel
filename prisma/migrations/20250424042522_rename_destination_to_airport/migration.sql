/*
  Warnings:

  - You are about to drop the `destination` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `package` DROP FOREIGN KEY `Package_destinationId_fkey`;

-- DropIndex
DROP INDEX `Package_destinationId_fkey` ON `package`;

-- DropTable
DROP TABLE `destination`;

-- CreateTable
CREATE TABLE `Airport` (
    `id` VARCHAR(191) NOT NULL,
    `countryName` VARCHAR(191) NOT NULL,
    `countryCode` VARCHAR(191) NOT NULL,
    `airportName` VARCHAR(191) NOT NULL,
    `airportCode` VARCHAR(191) NOT NULL,
    `format` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Package` ADD CONSTRAINT `Package_destinationId_fkey` FOREIGN KEY (`destinationId`) REFERENCES `Airport`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
