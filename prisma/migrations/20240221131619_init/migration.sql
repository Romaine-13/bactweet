/*
  Warnings:

  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - Added the required column `like` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "content",
ADD COLUMN     "like" INTEGER NOT NULL,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "url" TEXT NOT NULL,
ALTER COLUMN "body" DROP NOT NULL,
ALTER COLUMN "body" DROP DEFAULT,
ALTER COLUMN "body" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profile" TEXT;
