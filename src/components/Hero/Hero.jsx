import { Heading, Box } from "@chakra-ui/react";

function Hero() {
  return (
    <Box w="100%" h={`calc(100vh - 70px)`}>
      <Heading
        py="20px"
        color="primaryTextColor"
        textAlign="center"
        fontFamily="Inter, sans-serif"
        fontWeight="600"
      >
        HERO SECTION
      </Heading>
    </Box>
  );
}

export default Hero;
