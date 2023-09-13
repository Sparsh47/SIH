import {
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  CardHeader,
  Stack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

function CoursesSwiper() {
  return (
    <Box w="100%" h="70vh" bg="gray.300">
      <Heading py="20px" color="#666" textAlign="center">
        COURSES SECTION
      </Heading>
      {/* <Card maxW="sm">
        <CardHeader fontSize="24px" fontWeight="bold">
          COURSE
        </CardHeader>
        <CardBody>
          <Image
            src="https://th.bing.com/th/id/R.16bfcf3e8b0ad677369b608a7d5f6df6?rik=yaTF2TycYconWw&pid=ImgRaw&r=0"
            alt="example"
            borderRadius="lg"
          />
          <Stack>
            <Text fontSize="20px">Machine Learning Course</Text>
          </Stack>
        </CardBody>
      </Card> */}
    </Box>
  );
}

export default CoursesSwiper;
