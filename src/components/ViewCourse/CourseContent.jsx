import {
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
} from "@chakra-ui/react";
import CourseContentList from "./CourseContentList";

function CourseContent() {
  return (
    <Flex w="100%" h="fit-content" justify="center" p="50px" direction="column">
      <Heading
        px="20px"
        mb="0.7em"
        fontSize="5xl"
        fontWeight="medium"
        color="primaryTextColor"
      >
        What you'll learn?
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple w="100%" px="20px">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize="20px"
                p="10px"
                color="primaryTextColor"
                fontWeight="medium"
              >
                What is Machine Learning?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize="20px"
                p="10px"
                color="primaryTextColor"
                fontWeight="medium"
              >
                Simple Linear Regression
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize="20px"
                p="10px"
                color="primaryTextColor"
                fontWeight="medium"
              >
                Multiple Linear Regression
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize="20px"
                p="10px"
                color="primaryTextColor"
                fontWeight="medium"
              >
                Polynomial Regression
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default CourseContent;
