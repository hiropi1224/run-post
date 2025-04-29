import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { TemplateList } from "~/modules/templates/ui/template-list";
import { trpc } from "~/trpc/server";

export default function TemplatesPage() {
  void trpc.templates.getMany.prefetch();

  return (
    <Container fluid p={4} gap={4} flexDirection="column" display="flex">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          テンプレート一覧
        </Heading>
        <Link href="/templates/new">
          <Button>新規作成</Button>
        </Link>
      </Flex>
      <TemplateList />
    </Container>
  );
}
