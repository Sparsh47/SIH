import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";
import { Button, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Result = ({ score, setScore, incorrect, setincorrect }) => {
  const history = useHistory();
  const location = useLocation();
  const { wrongQuestions } = location.state || [];
  console.log(wrongQuestions);

  console.log(incorrect);

  const handleClick = () => {
    setScore(0);
    axios
      .post("http://localhost:8000/recieve-questions", {
        questions: wrongQuestions,
      })
      .then((response) => {
        console.log(response.data.result);
      })
      .catch((error) => {
        console.log("Error sending questions to FastAPI", error);
      });
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
