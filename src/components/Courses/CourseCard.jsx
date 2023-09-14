import {
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  Stack,
  Button,
  HStack,
} from "@chakra-ui/react";

function CourseCard(props) {
  return (
    <Card maxW="420px" borderRadius="20px" p="5px" borderTop="1px solid #eee">
      <CardBody fontFamily="Inter, sans-serif">
        <Stack>
          <Box bg="gray.100" h="275px" w="100%" borderRadius="10px"></Box>
          <Heading fontSize="22px" fontWeight="semibold" color="#000">
            {props.title}
          </Heading>
          <Text fontSize="18px" textAlign="justify" color="#7d7c83">
            {props.desc}
          </Text>
          <HStack minH="fit-content">
            <Button
              variant="ghost"
              color="#2454ff"
              _hover={{ bg: "blue.50" }}
              w="sm"
              h="50px"
            >
              View Course
            </Button>
            <Button
              variant="solid"
              color="white"
              bg="#2454ff"
              w="sm"
              h="50px"
              _hover={{ bg: "#1f48db" }}
            >
              Personalize
            </Button>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
