import { db } from "~/db";
import { templates } from "~/db/schema";
import { baseProcedure, createTRPCRouter } from "~/trpc/init";

export const templatesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    const data = await db.select().from(templates);

    return data;
  }),
})