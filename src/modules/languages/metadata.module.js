import { MetadataController } from "./metadata.controller.js";
import { MetadataRoutes } from "./metadata.routes.js";
import { MetadataService } from "./metadata.service.js";

export function MetadataModule(app, prisma) {
  const service = new MetadataService(prisma);
  const controller = new MetadataController(service);
  const routes = new MetadataRoutes(controller);

  app.use("/metadata", routes.register());
}
