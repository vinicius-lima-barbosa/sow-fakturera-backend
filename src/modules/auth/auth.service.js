import "dotenv/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { toUserResponse } from "../../utils/to-user-response.util.js";

export class AuthService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  createToken = (user) => {
    const payload = {
      id: user.id,
      email: user.email,
    };

    const secret = process.env.SECRET_KEY;
    if (!secret) {
      throw new Error("Secret key is not defined");
    }

    const token = jwt.sign(payload, secret, {
      expiresIn: "24h",
    });

    return token;
  };

  login = async (data) => {
    if (!data.email || data.email === "") {
      throw new Error("Email is required");
    }

    if (!data.password || data.password === "") {
      throw new Error("Password is required");
    }

    const userExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!userExists) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(
      data.password,
      userExists.password,
    );
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    return {
      token: this.createToken(userExists),
      user: toUserResponse(userExists),
    };
  };
}
