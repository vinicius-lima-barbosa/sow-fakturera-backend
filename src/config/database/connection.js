import PrismaService from "./index.js";

export class DatabaseConnection {
  constructor() {
    this.prisma = new PrismaService();
  }

  async connect() {
    await this.prisma.$connect();
    console.log("Database connected");
  }

  async disconnect() {
    await this.prisma.$disconnect();
    console.log("Database disconnected");
  }

  getPrisma() {
    return this.prisma;
  }
}

export default new DatabaseConnection();
