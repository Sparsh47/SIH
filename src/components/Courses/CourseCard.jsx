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
          <Heading
            fontSize="22px"
            fontWeight="semibold"
            color="primaryTextColor"
          >
            {props.title}
          </Heading>
          <Text fontSize="18px" textAlign="justify" color="secondaryTextColor">
            {props.desc}
          </Text>
          <HStack minH="fit-content">
            <Button
              variant="ghost"
              color="ctaColor"
              _hover={{ bg: "blue.50" }}
              w="sm"
              h="50px"
            >
              View Course
            </Button>
            <Button
              variant="solid"
              color="white"
              bg="ctaColor"
              w="sm"
              h="50px"
              _hover={{ bg: "ctaHover" }}
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
