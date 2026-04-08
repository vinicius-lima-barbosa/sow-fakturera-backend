/*
  Warnings:

  - Added the required column `icon_url` to the `login_page_metadata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "login_page_metadata" ADD COLUMN     "icon_url" TEXT NOT NULL;
