export default function StravaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Strava</h1>
      {children}
    </div>
  );
}
