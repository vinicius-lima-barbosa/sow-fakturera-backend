import "dotenv/config";
import express from "express";
import databaseConnection from "./config/database/connection.js";

class AppBootstrap {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.prisma = databaseConnection.getPrisma();
  }

  routes() {
    this.app.get("/users", async (req, res) => {
      try {
        const users = await this.prisma.user.findMany();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
      }
    });
  }

  async init() {
    try {
      await databaseConnection.connect();
      this.app.use(express.json());

      this.routes();

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
