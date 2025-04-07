import { ClientGreeting } from "~/app/components/client-greeting";
import { Button } from "~/components/ui";

export default async function Home() {
  return (
    <div className="">
      <p>hello world</p>
      <Button>Click me</Button>
      <ClientGreeting />
    </div>
  );
}
