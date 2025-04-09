"use client";

import type { StravaActivity } from "~/types/strava";

export const ActivityCard = ({ activity }: { activity: StravaActivity }) => {
  return (
    <div
      key={activity.id}
      className="transition-colors hover:border-primary-500"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{activity.name}</h3>
        <span className="text-gray-500 text-sm">{activity.sport_type}</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2">
          <span>{activity.start_date_local}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <span>{activity.distance}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{activity.moving_time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{activity.total_elevation_gain}m</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button type="button">詳細を見る</button>
      </div>
    </div>
  );
};
