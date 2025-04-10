import { Box, ClientOnly, Heading } from "@chakra-ui/react";
import { ColorModeToggle } from "~/components/color-mode-toggle";

export function Header() {
  return (
    <Box display="flex" justifyContent="space-between" p={4}>
      <Heading>Run Post</Heading>
      <ClientOnly>
        <ColorModeToggle />
      </ClientOnly>
    </Box>
  );
}
