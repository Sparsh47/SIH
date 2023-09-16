import { ListItem, List, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const listTextStyle = {
  fontSize: "18px",
  color: "secondaryTextColor",
  ml: "5px",
  fontWeight: "300",
};

const listStyle = {
  display: "flex",
  justify: "center",
  align: "center",
  my: "5px",
};

function CourseContentList() {
  return (
    <List>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} color="gray" fontSize="20px" />
        <Text sx={listTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} color="gray" fontSize="20px" />
        <Text sx={listTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} color="gray" fontSize="20px" />
        <Text sx={listTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} color="gray" fontSize="20px" />
        <Text sx={listTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} color="gray" fontSize="20px" />
        <Text sx={listTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Text>
      </ListItem>
    </List>
  );
}

export default CourseContentList;
