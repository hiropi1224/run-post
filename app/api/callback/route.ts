import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import TwitterApi from "twitter-api-v2";
import { env } from "~/env";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const state = searchParams.get("state");
  const code = searchParams.get("code");

  if (!state || !code) {
    return Response.json({ error: "Invalid code" }, { status: 400 });
  }

  const cookieStore = await cookies();
  const codeVerifier = cookieStore.get("codeVerifier")?.value;
  const cookieState = cookieStore.get("state")?.value;

  if (!cookieState || !codeVerifier) {
    return Response.json(
      { error: "Invalid codeVerifier or state" },
      { status: 400 },
    );
  }

  const client = new TwitterApi({
    clientId: env.X_CLIENT_ID,
    clientSecret: env.X_CLIENT_SECRET,
  });

  await client
    .loginWithOAuth2({
      code,
      codeVerifier,
      redirectUri: `${env.REDIRECT_URI}/api/callback/api/callback`,
    })
    .then(async (token) => {
      cookieStore.set("accessToken", JSON.stringify(token), {
        httpOnly: true,
        secure: true,
      });
    })
    .catch(() => console.error("Invalid verifier or access tokens!"));

  return redirect("/");
};
