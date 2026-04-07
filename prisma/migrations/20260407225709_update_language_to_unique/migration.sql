/*
  Warnings:

  - A unique constraint covering the columns `[language]` on the table `login_page_metadata` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "login_page_metadata_language_key" ON "login_page_metadata"("language");
