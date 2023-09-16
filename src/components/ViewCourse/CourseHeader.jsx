import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

function CourseHeader(props) {
  return (
    <Flex w="100%" h="50vh" bg="blue.50" align="center" justify="space-evenly">
      <Flex h="75%" w="50%" p="40px" direction="column" justify="space-between">
        <Heading color="primaryTextColor" fontSize="40px" fontWeight="800">
          {props.title}
        </Heading>
        <Box>
          <Text
            fontSize="18px"
            m="5px"
            textAlign="justify"
            fontWeight="light"
            color="secondaryTextColor"
          >
            {props.desc}
          </Text>
          <Text
            fontSize="18px"
            m="5px"
            textAlign="justify"
            fontWeight="light"
            color="secondaryTextColor"
          >
            {props.keyConcepts}
          </Text>
        </Box>
        <Button
          bg="ctaColor"
          _hover={{ bg: "ctaHover" }}
          color="white"
          p="25px"
          fontSize="16px"
          w="200px"
        >
          Start for Free
        </Button>
      </Flex>
      <Box
        bg="gray.200"
        w="25%"
        h="70%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px"
      >
        <Text fontSize="2xl">Course Image goes here</Text>
      </Box>
    </Flex>
  );
}

export default CourseHeader;
