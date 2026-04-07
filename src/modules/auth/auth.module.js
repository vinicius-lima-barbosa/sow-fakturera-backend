import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { AuthRoutes } from "./auth.routes.js";

export function AuthModule(app, prisma) {
  const service = new AuthService(prisma);
  const controller = new AuthController(service);
  const routes = new AuthRoutes(controller);

  app.use("/auth", routes.register());
}
