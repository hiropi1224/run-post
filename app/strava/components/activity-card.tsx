"use client";
import { IconCalendar, IconChartBar, IconClock, IconMap } from "justd-icons";
import { Button } from "~/components/ui";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";

import type { StravaActivity } from "~/types/strava";

export const ActivityCard = ({ activity }: { activity: StravaActivity }) => {
  return (
    <Card
      key={activity.id}
      className="transition-colors hover:border-primary-500"
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{activity.name}</h3>
          <span className="text-gray-500 text-sm">{activity.sport_type}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <IconCalendar className="text-gray-400" />
            <span>{activity.start_date_local}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <IconMap className="text-gray-400" />
              <span>{activity.distance}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconClock className="text-gray-400" />
              <span>{activity.moving_time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconChartBar className="text-gray-400" />
              <span>{activity.total_elevation_gain}m</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button size="small">詳細を見る</Button>
      </CardFooter>
    </Card>
  );
};
