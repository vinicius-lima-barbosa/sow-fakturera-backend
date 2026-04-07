-- CreateTable
CREATE TABLE "login_page_metadata" (
    "id" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "home" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "our_costumers" TEXT NOT NULL,
    "contact_us" TEXT NOT NULL,
    "login_header" TEXT NOT NULL,
    "email_label" TEXT NOT NULL,
    "email_field" TEXT NOT NULL,
    "password_label" TEXT NOT NULL,
    "password_field" TEXT NOT NULL,
    "login_button" TEXT NOT NULL,
    "register_button" TEXT NOT NULL,
    "forgotten_password_button" TEXT NOT NULL,
    "footer_title" TEXT NOT NULL,
    "footer_home" TEXT NOT NULL,
    "footer_order" TEXT NOT NULL,
    "footer_contact_us" TEXT NOT NULL,
    "footer_rights" TEXT NOT NULL,

    CONSTRAINT "login_page_metadata_pkey" PRIMARY KEY ("id")
);
