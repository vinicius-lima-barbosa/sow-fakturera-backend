import { ProductsController } from "./products.controller.js";
import { ProductsService } from "./products.service.js";
import { ProductsRoutes } from "./products.routes.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

export function ProductsModule(app, prisma) {
  const service = new ProductsService(prisma);
  const controller = new ProductsController(service);
  const routes = new ProductsRoutes(controller);

  app.use("/products", authMiddleware, routes.register());
}
