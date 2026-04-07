import { UsersService } from "./users.service.js";
import { UsersController } from "./users.controller.js";
import { UsersRoutes } from "./users.routes.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

export function UsersModule(app, prisma) {
  const service = new UsersService(prisma);
  const controller = new UsersController(service);
  const routes = new UsersRoutes(controller);

  app.use("/users", authMiddleware, routes.register());
}
