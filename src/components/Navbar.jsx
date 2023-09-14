import {
  Avatar,
  Button,
  Flex,
  Heading,
  Text,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { navStyles, linksStyles, hoverStyles } from "./navbarStyles";
import { AiOutlineUser } from "react-icons/ai";
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
        {/* <Avatar bg="gray.300" icon={<AiOutlineUser fontSize="1.5rem" />} /> */}
        <AvatarPopover />
      </Flex>
    </Flex>
  );
}

export default Navbar;
