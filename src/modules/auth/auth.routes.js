import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";

export class AuthRoutes {
  constructor(authController) {
    this.router = Router();
    this.authController = authController;
  }

  register() {
    this.router.post("/login", this.authController.login);
    this.router.post("/logout", authMiddleware, this.authController.logout);
    return this.router;
  }
}
