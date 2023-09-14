import React from "react";
import {
  Avatar,
  Flex,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Divider,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";

function AvatarPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar
          icon={<AiOutlineUser fontSize="1.5rem" />}
          _hover={{ cursor: "pointer" }}
        />
      </PopoverTrigger>
      <PopoverContent maxW="150px" mr="50px" mt="10px">
        <Flex display="flex" align="start" direction="column" p="15px">
          <Button
            variant="link"
            __css={{ textDecoration: "none" }}
            fontSize="lg"
            fontWeight="regular"
          >
            Profile
          </Button>
          <Divider color="gray.700" textDecorationThickness="3px" />
          <Button
            variant="link"
            __css={{ textDecoration: "none" }}
            fontSize="lg"
            fontWeight="regular"
          >
            Logout
          </Button>
        </Flex>
      </PopoverContent>
    </Popover>
  );
}

export default AvatarPopover;
