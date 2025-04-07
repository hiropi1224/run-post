import { Suspense } from "react";
import { TwitterAuthButton } from "~/app/(auth)/x/components/twitter-authbutton";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <Suspense>
        <TwitterAuthButton />
      </Suspense>
    </main>
  );
}
