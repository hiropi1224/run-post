import { Container, Text } from "@chakra-ui/react";
import { TemplateForm } from "~/modules/templates/form/template-form";

export default function NewTemplatePage() {
  return (
    <Container>
      <Text>新規テンプレート作成</Text>
      <TemplateForm />
    </Container>
  );
}
