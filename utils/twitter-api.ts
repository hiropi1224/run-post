"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type IParsedOAuth2TokenResult, TwitterApi } from "twitter-api-v2";
import { env } from "~/env";

const createTwitterClient = (token?: string) => {
  if (token) {
    return new TwitterApi(token);
  }
  return new TwitterApi({
    clientId: env.X_CLIENT_ID,
    clientSecret: env.X_CLIENT_SECRET,
  });
};

async function getTokenFromCookies() {
  const cookieStore = await cookies();
  const savedToken = cookieStore.get("accessToken");

  return savedToken ? JSON.parse(savedToken.value) : undefined;
}

export async function createAuthLink() {
  const client = createTwitterClient();

  const cookieStore = await cookies();
  const { url, codeVerifier, state } = client.generateOAuth2AuthLink(
    `${env.REDIRECT_URI}/api/callback`,
    {
      scope: ["tweet.write", "users.read", "tweet.read", "offline.access"],
    },
  );

  cookieStore.set("codeVerifier", codeVerifier, {
    httpOnly: true,
    secure: true,
  });
  cookieStore.set("state", state, {
    httpOnly: true,
    secure: true,
  });

  if (url) {
    redirect(url);
  }
}

export async function postTweet(text: string) {
  const token: IParsedOAuth2TokenResult = await getTokenFromCookies();

  if (!token) {
    throw new Error("アクセストークンが見つかりません");
  }

  const client = new TwitterApi(token.accessToken);

  await client.v2.tweet(text);
}

export async function getUser() {
  const token: IParsedOAuth2TokenResult = await getTokenFromCookies();

  if (!token) {
    return null;
  }

  const client = new TwitterApi(token.accessToken);

  const { data: userObject } = await client.v2.me();

  return userObject;
}

export async function logout() {
  const cookieStore = await cookies();
  const token: IParsedOAuth2TokenResult = await getTokenFromCookies();

  if (!token) {
    return null;
  }

  const client = new TwitterApi(token.accessToken);

  client.revokeOAuth2Token(token.accessToken, "access_token");
  cookieStore.delete("accessToken");
  redirect("/");
}
