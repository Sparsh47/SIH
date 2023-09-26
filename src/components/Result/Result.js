import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";
import { Button, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Result = ({ score, setScore, incorrect, setincorrect }) => {
  const history = useHistory();

  console.log(incorrect);

  const handleClick = () => {
    setScore(0);
    history.push("/prequiz");
  };
  return (
    <div className="result">
      <Text className="title" fontWeight="bold" fontSize={40}>
        Final Score : {score}
      </Text>
      <ChakraLink
        as={ReactRouterLink}
        to="/personalize"
        style={{ textDecoration: "none" }}
      >
        <Button
          color="white"
          bg="ctaColor"
          _hover={{ bg: "ctaHover" }}
          fontSize="18px"
          fontWeight="semibold"
          w="200px"
          h="50px"
          style={{ alignSelf: "center", marginTop: 20 }}
          onClick={handleClick}
        >
          Go to course
        </Button>
      </ChakraLink>
    </div>
  );
};

export default Result;
