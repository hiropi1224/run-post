import type {
  ActivityLaps,
  StravaActivity,
  StravaResult,
} from "~/types/strava";

const STRAVA_API_CONFIG = {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  baseUrl: process.env.stravaEndpoint!,
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  activityEndpoint: process.env.stravaActivityEndpoint!,
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  clientId: process.env.stravaClientId!,
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  clientSecret: process.env.stravaClientSecret!,
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  refreshToken: process.env.stravaRefreshToken!,
} as const;

class StravaError extends Error {
  constructor(
    message: string,
    public status?: number,
  ) {
    super(message);
    this.name = "StravaError";
  }
}

// 共通のフェッチ関数
async function stravaFetch<T>(
  url: string,
  options: RequestInit & { auth?: boolean } = {},
): Promise<T> {
  try {
    const res = await fetch(url, {
      ...options,
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new StravaError(`Strava API error: ${res.statusText}`, res.status);
    }

    return res.json();
  } catch (error) {
    if (error instanceof StravaError) throw error;
    throw new StravaError(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}

export const getStravaToken = async (): Promise<StravaResult> => {
  const url = new URL(STRAVA_API_CONFIG.baseUrl);
  url.searchParams.append("client_id", STRAVA_API_CONFIG.clientId);
  url.searchParams.append("client_secret", STRAVA_API_CONFIG.clientSecret);
  url.searchParams.append("grant_type", "refresh_token");
  url.searchParams.append("refresh_token", STRAVA_API_CONFIG.refreshToken);

  return stravaFetch<StravaResult>(url.toString(), {
    method: "POST",
  });
};

interface BaseParams {
  token_type: string;
  access_token: string;
}

interface ActivityListParams extends BaseParams {
  page?: number;
  pre_page?: number;
  before?: string;
  after?: string;
}

interface ActivityDetailParams extends BaseParams {
  activityId: string;
}

export const getStravaActivity = async ({
  token_type,
  access_token,
  page = 1,
  pre_page = 10,
  before = "",
  after = "",
}: ActivityListParams): Promise<StravaActivity[]> => {
  const url = new URL(STRAVA_API_CONFIG.activityEndpoint);
  url.searchParams.append("page", page.toString());
  url.searchParams.append("per_page", pre_page.toString());

  if (before && after) {
    url.searchParams.append("before", before);
    url.searchParams.append("after", after);
  }

  return stravaFetch<StravaActivity[]>(url.toString(), {
    headers: new Headers({
      Authorization: `${token_type} ${access_token}`,
    }),
    next: { revalidate: 3600, tags: ["activity"] },
  });
};

export const getStravaActivityDetail = async ({
  token_type,
  access_token,
  activityId,
}: ActivityDetailParams): Promise<StravaActivity> => {
  const url = `${STRAVA_API_CONFIG.activityEndpoint}/${activityId}`;

  return stravaFetch<StravaActivity>(url, {
    headers: new Headers({
      Authorization: `${token_type} ${access_token}`,
    }),
  });
};

export const getStravaActivityLaps = async ({
  token_type,
  access_token,
  activityId,
}: ActivityDetailParams): Promise<ActivityLaps[]> => {
  const url = `${STRAVA_API_CONFIG.activityEndpoint}/${activityId}/laps`;

  return stravaFetch<ActivityLaps[]>(url, {
    headers: new Headers({
      Authorization: `${token_type} ${access_token}`,
    }),
  });
};
