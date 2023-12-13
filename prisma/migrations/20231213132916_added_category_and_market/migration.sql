/*
  Warnings:

  - You are about to drop the column `name` on the `Crop` table. All the data in the column will be lost.
  - Added the required column `category` to the `Crop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commodity` to the `Crop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `market` to the `Price` table without a default value. This is not possible if the table is not empty.
  - Added the required column `market` to the `Volume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Crop" DROP COLUMN "name",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "commodity" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Price" ADD COLUMN     "market" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Volume" ADD COLUMN     "market" TEXT NOT NULL;
