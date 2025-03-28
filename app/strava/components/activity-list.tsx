import { ActivityCard } from "~/app/strava/components/activity-card";
import type { StravaActivity } from "~/types/strava";
export async function ActivityList({
  activities,
}: {
  activities: StravaActivity[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {activities.map((activity) => (
        <li key={activity.id}>
          <ActivityCard activity={activity} />
        </li>
      ))}
    </ul>
  );
}
