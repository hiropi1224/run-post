"use cache";

import { ActivityCard } from "~/app/strava/components/activity-card";
import { getStravaActivity, getStravaToken } from "~/modules/strava";

export default async function StravaPage() {
  const token = await getStravaToken();
  const activities = await getStravaActivity({
    token_type: token.token_type,
    access_token: token.access_token,
  });

  return (
    <div className="flex flex-col gap-4">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <li key={activity.id}>
            <ActivityCard activity={activity} />
          </li>
        ))}
      </ul>
    </div>
  );
}
