-- CreateTable
CREATE TABLE `TourPackage` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `locationId` VARCHAR(191) NOT NULL,
    `featured_picture` VARCHAR(191) NOT NULL,
    `duration` DOUBLE NOT NULL,
    `minimum_availability` VARCHAR(191) NOT NULL,
    `maximum_availability` VARCHAR(191) NOT NULL,
    `starting_price` INTEGER NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `currency` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TourPackage` ADD CONSTRAINT `TourPackage_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Airport`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
