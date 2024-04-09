-- CreateTable
CREATE TABLE `Rock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `area_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `nr` SMALLINT NOT NULL,
    `description` TEXT NOT NULL,
    `access` TEXT NOT NULL,
    `nature` TEXT NOT NULL,
    `zone` SMALLINT NOT NULL,
    `banned` SMALLINT NOT NULL,
    `height` SMALLINT NULL,
    `orientation` VARCHAR(50) NOT NULL,
    `season` VARCHAR(50) NOT NULL,
    `sunny` VARCHAR(50) NOT NULL,
    `rain` VARCHAR(50) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `header_image` VARCHAR(255) NOT NULL,
    `topo` SMALLINT NOT NULL,
    `latitude` FLOAT NULL,
    `longitude` FLOAT NULL,
    `online` BOOLEAN NOT NULL DEFAULT true,
    `path_coordinates` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
