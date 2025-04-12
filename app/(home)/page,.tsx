import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="main">
      {/* ヒーローセクション */}
      <Box bg={{ base: "gray.50", _dark: "gray.900" }} py={20} px={4}>
        <Container maxW="container.lg">
          <VStack gap={8} textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              color={{ base: "gray.900", _dark: "white" }}
            >
              SNSへの投稿を、もっとシンプルに
            </Heading>
            <Text fontSize="xl" color={{ base: "gray.600", _dark: "gray.300" }}>
              Run Postで、あなたのアクティビティを簡単に共有しましょう。
              ワンクリックで、複数のSNSに同時投稿できます。
            </Text>
            <Button size="lg" colorScheme="blue" rounded="full" px={8}>
              今すぐ始める
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* 機能セクション */}
      <Box py={20} px={4} bg={{ base: "white", _dark: "gray.800" }}>
        <Container maxW="container.lg">
          <VStack gap={16}>
            <Heading
              as="h2"
              size="xl"
              textAlign="center"
              mb={8}
              color={{ base: "gray.900", _dark: "white" }}
            >
              主な機能
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
              <Feature
                title="マルチプラットフォーム対応"
                text="TwitterやFacebook、Instagramなど、複数のSNSに同時投稿が可能です。"
              />
              <Feature
                title="スケジュール投稿"
                text="投稿を事前に設定して、最適なタイミングで自動投稿できます。"
              />
              <Feature
                title="簡単操作"
                text="直感的なインターフェースで、誰でも簡単に使いこなせます。"
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTAセクション */}
      <Box bg={{ base: "blue.50", _dark: "blue.900" }} py={16} px={4}>
        <Container maxW="container.lg">
          <VStack gap={8} textAlign="center">
            <Heading
              as="h3"
              size="lg"
              color={{ base: "gray.900", _dark: "white" }}
            >
              さあ、始めましょう
            </Heading>
            <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.300" }}>
              今すぐアカウントを作成して、SNS投稿を効率化しましょう。
            </Text>
            <Button size="lg" colorScheme="blue" rounded="full" px={8}>
              無料で登録
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}

interface FeatureProps {
  title: string;
  text: string;
}

function Feature({ title, text }: FeatureProps) {
  return (
    <VStack
      align="center"
      p={6}
      bg={{ base: "white", _dark: "gray.800" }}
      rounded="xl"
      shadow="base"
      gap={4}
    >
      <Heading as="h3" size="md" color={{ base: "gray.900", _dark: "white" }}>
        {title}
      </Heading>
      <Text textAlign="center" color={{ base: "gray.600", _dark: "gray.300" }}>
        {text}
      </Text>
    </VStack>
  );
}
