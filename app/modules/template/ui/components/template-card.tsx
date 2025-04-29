import { Button, Card } from "@chakra-ui/react";

export const TemplateCard = ({
  title,
  description,
}: { title: string; description: string }) => {
  return (
    <Card.Root variant="elevated">
      <Card.Body gap="2">
        <Card.Title mb="2">{title}</Card.Title>
        <Card.Description>
          {description.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">編集</Button>
        <Button>投稿</Button>
      </Card.Footer>
    </Card.Root>
  );
};
