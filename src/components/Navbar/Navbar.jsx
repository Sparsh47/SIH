import {
  Divider,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { navStyles, linksStyles, hoverStyles } from "./navbarStyles";
import { Link as ReactRouterLink } from "react-router-dom";
import AvatarPopover from "./AvatarPopover";

function Navbar() {
  return (
    <Flex sx={navStyles}>
      <Heading p="5px" ml="50px" fontSize="40px">
        Logo
      </Heading>
      <Flex w="15%" h="70%" align="center">
        <Flex sx={linksStyles}>
          <Text sx={hoverStyles}>
            {" "}
            <ChakraLink
              as={ReactRouterLink}
              to="/our-team"
              style={{ textDecoration: "none" }}
            >
              Our Team
            </ChakraLink>
          </Text>
        </Flex>
        <Divider orientation="vertical" px="15px" />
        <AvatarPopover />
      </Flex>
    </Flex>
  );
}

export default Navbar;
