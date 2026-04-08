-- AlterTable
ALTER TABLE "login_page_metadata" ADD COLUMN "about_us" TEXT;

-- Backfill existing rows before enforcing NOT NULL
UPDATE "login_page_metadata"
SET "about_us" = ''
WHERE "about_us" IS NULL;

ALTER TABLE "login_page_metadata" ALTER COLUMN "about_us" SET NOT NULL;

