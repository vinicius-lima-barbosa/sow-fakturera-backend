import { UsersController } from "./users.controller.js";
import { UsersRoutes } from "./users.routes.js";
import { UsersService } from "./users.service.js";

export function UsersModule(app, prisma) {
  const service = new UsersService(prisma);
  const controller = new UsersController(service);
  const routes = new UsersRoutes(controller);

  app.use("/users", routes.register());
}
