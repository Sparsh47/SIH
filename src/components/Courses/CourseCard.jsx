import {
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  Stack,
  Button,
  ButtonGroup,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

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
          <ButtonGroup minH="fit-content">
            <Button
              variant="ghost"
              color="ctaColor"
              _hover={{ bg: "blue.50" }}
              w="sm"
              h="50px"
            >
              <ChakraLink
                as={ReactRouterLink}
                to="/courses"
                style={{ textDecoration: "none" }}
              >
                View Course
              </ChakraLink>
            </Button>
            <Button
              variant="solid"
              color="white"
              bg="ctaColor"
              w="sm"
              h="50px"
              _hover={{ bg: "ctaHover" }}
            >
              <ChakraLink
                as={ReactRouterLink}
                to="/prequiz"
                style={{ textDecoration: "none" }}
              >
               Personalize
              </ChakraLink>
              
            </Button>
          </ButtonGroup>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
