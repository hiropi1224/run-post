import { Header } from "~/components/layouts/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      {children}
    </div>
  );
}
