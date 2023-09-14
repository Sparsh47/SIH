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
    <Card maxW="420px" borderRadius="20px" p="5px">
      <CardBody>
        <Stack>
          <Box bg="gray.100" h="275px" w="100%" borderRadius="10px"></Box>
          <Heading fontSize="22px" fontWeight="semibold">
            {props.title}
          </Heading>
          <Text fontSize="18px" textAlign="justify" color="gray.500">
            {props.desc}
          </Text>
          <HStack minH="fit-content">
            <Button variant="ghost" colorScheme="facebook" w="sm" h="50px">
              View Course
            </Button>
            <Button variant="solid" colorScheme="facebook" w="sm" h="50px">
              Personalize
            </Button>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
