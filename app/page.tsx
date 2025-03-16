import { ClientGreeting } from "~/app/components/client-greeting";
import { Button } from "~/components/ui";
import { HydrateClient, trpc } from "~/trpc/server";

export default function Home() {
  void trpc.hello.prefetch({
    text: "client",
  });

  return (
    <HydrateClient>
      <div className="">
        <p>hello world</p>
        <Button>Click me</Button>
        <ClientGreeting />
      </div>
    </HydrateClient>
  );
}
