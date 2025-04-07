import { HydrateClient, trpc } from "~/trpc/server";

export default async function TemplatesPage() {
  "use cache";
  await trpc.templates.getMany.prefetch();
  return (
    <HydrateClient>
      <div>
        <h1>Templates</h1>
      </div>
    </HydrateClient>
  );
}
