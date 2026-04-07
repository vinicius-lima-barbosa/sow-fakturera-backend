import { Router } from "express";

export class AuthRoutes {
  constructor(authController) {
    this.router = Router();
    this.authController = authController;
  }

  register() {
    this.router.post("/login", this.authController.login);
    this.router.post("/logout", this.authController.logout);
    return this.router;
  }
}
