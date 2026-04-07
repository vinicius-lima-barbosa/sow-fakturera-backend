-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "article_number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "in_price" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "unit" TEXT NOT NULL,
    "in_stock" BIGINT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_article_number_key" ON "products"("article_number");
