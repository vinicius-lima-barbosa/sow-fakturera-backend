import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import databaseConnection from "./config/database/connection.js";
import { AuthModule } from "./modules/auth/auth.module.js";
import { MetadataModule } from "./modules/languages/metadata.module.js";
import { ProductsModule } from "./modules/products/products.module.js";
import { UsersModule } from "./modules/users/users.module.js";

class AppBootstrap {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.secret = process.env.SECRET_KEY;
    this.prisma = databaseConnection.getPrisma();
  }

  registerModules() {
    UsersModule(this.app, this.prisma);
    AuthModule(this.app, this.prisma);
    ProductsModule(this.app, this.prisma);
    MetadataModule(this.app, this.prisma);
  }

  async init() {
    try {
      await databaseConnection.connect();
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(cookieParser(this.secret));
      this.app.use(
        cors({
          origin: true,
          methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          allowedHeaders: ["Content-Type", "Authorization"],
          credentials: true,
        }),
      );

      this.registerModules();

      this.app.listen(this.port, () => {
        console.log("Server in port", this.port);
      });
    } catch (error) {
      console.error("Failed to start bottstrap:", error);
    }
  }
}

const server = new AppBootstrap();
server.init();
