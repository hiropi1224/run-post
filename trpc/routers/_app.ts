import { templatesRouter } from "~/modules/templates/server/procedures";
import { createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  templates: templatesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
