import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";

export class UsersRoutes {
  constructor(usersController) {
    this.router = Router();
    this.usersController = usersController;
  }

  register() {
    this.router.get("/", authMiddleware, this.usersController.getAllUsers);
    this.router.get("/me", authMiddleware, this.usersController.getMe);
    this.router.get("/:id", authMiddleware, this.usersController.getUserById);
    this.router.post("/", this.usersController.createUser);
    return this.router;
  }
}
