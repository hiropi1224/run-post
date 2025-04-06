import { Button } from "~/components/ui";
import { createAuthLink } from "~/utils/twitter-api";

export function TwitterAuthButton() {
  return (
    <form action={createAuthLink}>
      <Button type="submit">X認証でログイン</Button>
    </form>
  );
}
