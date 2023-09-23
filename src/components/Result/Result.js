import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";
import { Button, Text } from "@chakra-ui/react";

const Result = ({ score, setScore }) => {
  const history = useHistory();

  const handleClick = () => {
    setScore(0);
    history.push("/prequiz");
  };
  return (
    <div className="result">
      <Text className="title" fontWeight="bold" fontSize={40}>
        Final Score : {score}
      </Text>
      <Button
        color="secondary"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={handleClick}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
