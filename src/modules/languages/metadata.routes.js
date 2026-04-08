import { Router } from "express";

export class MetadataRoutes {
  constructor(metadataController) {
    this.router = Router();
    this.metadataController = metadataController;
  }

  register() {
    this.router.get("/", this.metadataController.getAll);
    this.router.get("/:id", this.metadataController.getById);
    this.router.post("/", this.metadataController.create);
    this.router.patch("/:id", this.metadataController.update);
    return this.router;
  }
}
