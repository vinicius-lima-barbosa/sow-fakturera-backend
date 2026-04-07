import { Router } from "express";

export class ProductsRoutes {
  constructor(productsController) {
    this.router = Router();
    this.productsController = productsController;
  }

  register() {
    this.router.get("/", this.productsController.getAll);
    this.router.post("/", this.productsController.create);
    this.router.patch("/:id", this.productsController.update);
    return this.router;
  }
}
