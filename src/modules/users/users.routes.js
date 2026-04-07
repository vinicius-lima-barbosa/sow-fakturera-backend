import { Router } from "express";

export class UsersRoutes {
  constructor(usersController) {
    this.router = Router();
    this.usersController = usersController;
  }

  register() {
    this.router.get("/", this.usersController.getAllUsers);
    this.router.get("/:id", this.usersController.getUserById);
    this.router.post("/", this.usersController.createUser);
    return this.router;
  }
}
