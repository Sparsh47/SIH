import { Text, Box, Heading } from "@chakra-ui/react";

function Footer() {
  return (
    <Box w="100%" h="30vh" bg="gray.500">
      <Heading py="20px" color="#f5f5f5" textAlign="center">
        FOOTER
      </Heading>
      <Text position="absolute" bottom="0"></Text>
    </Box>
  );
}

export default Footer;
