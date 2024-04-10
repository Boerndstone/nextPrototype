/*
  Warnings:

  - You are about to alter the column `sunny` on the `Rock` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `SmallInt`.
  - You are about to alter the column `rain` on the `Rock` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `SmallInt`.

*/
-- AlterTable
ALTER TABLE `Rock` ADD COLUMN `child_friendly` SMALLINT NULL,
    MODIFY `sunny` SMALLINT NULL,
    MODIFY `rain` SMALLINT NULL;
