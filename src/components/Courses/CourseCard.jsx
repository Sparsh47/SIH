import {
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  Stack,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CourseCard(props) {
  let coursename = props.title;
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
              <Link
                // as={ReactRouterLink}
                to="/courses"
                style={{ textDecoration: "none" }}
              >
                View Course
              </Link>
            </Button>
            <Button
              variant="solid"
              color="white"
              bg="ctaColor"
              w="sm"
              h="50px"
              _hover={{ bg: "ctaHover" }}
            >
              <Link
                to={{pathname : "/prequiz", state : props.title}}
                style={{ textDecoration: "none" }}
              >
                Personalize
              </Link>
            </Button>
          </ButtonGroup>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
