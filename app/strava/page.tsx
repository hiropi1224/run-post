import { Suspense } from "react";
import { ActivityList } from "~/app/strava/components/activity-list";
import { getStravaActivity } from "~/modules/strava";

export default async function StravaPage() {
  const activities = getStravaActivity({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ActivityList
        activities={await activities.then((activities) => activities)}
      />
    </Suspense>
  );
}
