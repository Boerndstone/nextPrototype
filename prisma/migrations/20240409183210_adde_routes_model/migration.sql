/*
  Warnings:

  - You are about to alter the column `area_id` on the `Rock` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `SmallInt`.

*/
-- AlterTable
ALTER TABLE `Rock` MODIFY `area_id` SMALLINT NOT NULL;

-- CreateTable
CREATE TABLE `Routes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `area_id` SMALLINT NOT NULL,
    `rock_id` SMALLINT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `grade` VARCHAR(20) NOT NULL,
    `climbed` BOOLEAN NOT NULL DEFAULT false,
    `first_ascent` VARCHAR(100) NOT NULL,
    `year_first_ascent` SMALLINT NOT NULL,
    `protection` SMALLINT NOT NULL,
    `description` TEXT NOT NULL,
    `scale` VARCHAR(100) NOT NULL,
    `grade_no` SMALLINT NOT NULL,
    `rating` SMALLINT NOT NULL,
    `topo_id` SMALLINT NOT NULL,
    `nr` SMALLINT NOT NULL,
    `relates_to_route_id` SMALLINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
