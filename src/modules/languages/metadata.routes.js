import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";

export class MetadataRoutes {
  constructor(metadataController) {
    this.router = Router();
    this.metadataController = metadataController;
  }

  register() {
    this.router.get("/", this.metadataController.getAll);
    this.router.get("/:id", this.metadataController.getById);
    this.router.post("/", authMiddleware, this.metadataController.create);
    this.router.patch("/:id", authMiddleware, this.metadataController.update);
    return this.router;
  }
}
