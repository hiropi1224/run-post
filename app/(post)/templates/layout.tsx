import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import type { NextLayoutProps } from "~/app/type";

export default function Layout({ children }: NextLayoutProps) {
  return (
    <Container fluid>
      <Flex justifyContent="space-between" py={4}>
        <Heading as="h1" size="lg">
          テンプレート一覧
        </Heading>
        <Button asChild>
          <Link href="/templates/new">新規作成</Link>
        </Button>
      </Flex>
      {children}
    </Container>
  );
}
