import type { NextLayoutProps } from "~/app/type";
import { Container } from "~/components/ui/container";

export default function Layout({ children }: NextLayoutProps) {
  return (
    <Container>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </Container>
  );
}
