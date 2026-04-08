/*
  Warnings:

  - Added the required column `email_required` to the `login_page_metadata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_required` to the `login_page_metadata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "login_page_metadata" ADD COLUMN "email_required" TEXT,
ADD COLUMN "password_required" TEXT;

-- Backfill existing rows before enforcing NOT NULL
UPDATE "login_page_metadata"
SET "email_required" = ''
WHERE "email_required" IS NULL;

UPDATE "login_page_metadata"
SET "password_required" = ''
WHERE "password_required" IS NULL;

ALTER TABLE "login_page_metadata" ALTER COLUMN "email_required" SET NOT NULL,
ALTER COLUMN "password_required" SET NOT NULL;
