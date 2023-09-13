import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { navStyles, linksStyles, hoverStyles } from "./navbarStyles";

function Navbar() {
  return (
    <Flex sx={navStyles}>
      <Heading p="5px" fontSize="40px">
        Logo
      </Heading>
      <Flex w="50%" align="center">
        <Flex sx={linksStyles}>
          <Text sx={hoverStyles}>Home</Text>
          <Text sx={hoverStyles}>About</Text>
          <Text sx={hoverStyles}>Courses</Text>
          <Text sx={hoverStyles}>Contact</Text>
        </Flex>
        <Flex align="center">
          <Button
            m="5px"
            p="20px"
            variant="outline"
            color="white"
            _hover={{
              color: "black",
              bg: "gray.100",
              transition: "all 0.3s ease",
            }}
          >
            Signup
          </Button>
          <Button m="5px" p="20px">
            Login
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
