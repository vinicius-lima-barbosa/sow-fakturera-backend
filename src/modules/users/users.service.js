import bcrypt from "bcryptjs";
import { toUserResponse } from "../../utils/to-user-response.util.js";

export class UsersService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  getAllUsers = async () => {
    const users = await this.prisma.user.findMany();
    return users.map((user) => toUserResponse(user));
  };

  getUserById = async (id) => {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new Error("User not found");
    }

    return toUserResponse(user);
  };

  createUser = async (data) => {
    if (!data.name || data.name === "") {
      throw new Error("Name is required");
    }

    if (!data.email || data.email === "") {
      throw new Error("Email is required");
    }

    if (!data.password || data.password === "") {
      throw new Error("Password is required");
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error("Email already in use");
    }

    const hash = await bcrypt.hash(data.password, 10);
    data.password = hash;
    data.createdAt = new Date();

    const newUser = await this.prisma.user.create({ data });
    if (!newUser) {
      throw new Error("Failed to create user");
    }

    return toUserResponse(newUser);
  };
}
