import { Flex, Heading, Text } from "@chakra-ui/react";
import { navStyles, linksStyles, hoverStyles } from "./navbarStyles";
import AvatarPopover from "./AvatarPopover";

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
        <AvatarPopover />
      </Flex>
    </Flex>
  );
}

export default Navbar;
