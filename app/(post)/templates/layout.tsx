import type { NextLayoutProps } from "~/app/type";

export default function Layout({ children }: NextLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}
