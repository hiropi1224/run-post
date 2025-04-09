import { createAuthLink } from "~/utils/twitter-api";

export function TwitterAuthButton() {
  return (
    <form action={createAuthLink}>
      <button type="submit">X認証でログイン</button>
    </form>
  );
}
