import { Heading, Box } from "@chakra-ui/react";

function Hero() {
  return (
    <Box w="100%" h={`calc(100vh - 70px)`} bg="gray.200">
      <Heading py="20px" color="#555" textAlign="center">
        HERO SECTION
      </Heading>
    </Box>
  );
}

export default Hero;
