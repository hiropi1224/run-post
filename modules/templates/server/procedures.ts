import { randomUUID } from "node:crypto";
import { db } from "~/db";
import { templates } from "~/db/schema";
import { formSchema } from "~/modules/templates/form/config";
import { baseProcedure, createTRPCRouter } from "~/trpc/init";

export const templatesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    const data = await db.select().from(templates);

    return data;
  }),

  create: baseProcedure.input(formSchema).mutation(async ({ ctx, input }) => {
    const [template] = await db.insert(templates).values({
      id: randomUUID(),
      name: input.name,
      content: input.content,
      type: input.type,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).returning();

    return {
      template,
    };
  }),
})