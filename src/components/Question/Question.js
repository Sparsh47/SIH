import { useState } from "react";
import { useHistory } from "react-router";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Button } from "@chakra-ui/react";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  correct,
  setScore,
  score,
  setQuestions,
  choiceA,
  choiceB,
  choiceC,
  choiceD,
  answers,
  options,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [ifcorrect, setifcorrect] = useState("");
  const [ifwrong, setifwrong] = useState("");

  const history = useHistory();

  const handleSelect = (select) => {
    // if (selected === select && selected === correct) return "select";
    // else if (selected === select && selected !== correct) return "wrong";
    // else if (select === correct) return "select";
    if (select === "correct") {
      setifcorrect("select");
    } else if (select === "wrong") {
      setifwrong("wrong");
    }
  };

  // const handleCheck = (i) => {
  //   if (i === correct) setScore(score + 1);
  //   setError(false);
  // };

  const handleCheckA = (key) => {
    setSelected(0);
    console.log(choiceA[key]);
    if (choiceA[key] === answers[currQues]) {
      setScore(score + 1);
      handleSelect("correct");
    } else {
      handleSelect("wrong");
    }
  };
  const handleCheckB = (key) => {
    setSelected(1);
    console.log(choiceB[key]);
    if (choiceB[key] === answers[currQues]) {
      setScore(score + 1);
      handleSelect("correct");
    } else {
      handleSelect("wrong");
    }
  };
  const handleCheckC = (key) => {
    setSelected(2);
    console.log(choiceC[key]);
    if (choiceC[key] === answers[currQues]) {
      setScore(score + 1);
      handleSelect("correct");
    } else {
      handleSelect("wrong");
    }
  };
  const handleCheckD = (key) => {
    setSelected(3);
    console.log(choiceD[key]);
    if (choiceD[key] === answers[currQues]) {
      setScore(score + 1);
      handleSelect("correct");
    } else {
      handleSelect("wrong");
    }
  };

  const handleNext = () => {
    if (currQues === answers.length - 1) {
      history.push("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
      setifcorrect();
      setifwrong();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      <h1>
        Question {currQues + 1} / {answers.length} :{" "}
      </h1>

      <div className="singleQuestion">
        <h2>{questions[currQues]}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <button
            className={`singleOption ${selected === 0 && ifcorrect} ${
              selected === 0 && ifwrong
            } ${ifwrong && choiceA[currQues] === answers[currQues] && "select"}`}
            key="0"
            onClick={() => handleCheckA(currQues)}
            disabled={selected}
          >
            {choiceA[currQues]}
          </button>
          <button
            className={`singleOption ${selected === 1 && ifcorrect} ${
              selected === 1 && ifwrong
            } ${ifwrong && choiceB[currQues] === answers[currQues] && "select"}`}
            key="1"
            onClick={() => handleCheckB(currQues)}
            disabled={selected}
          >
            {choiceB[currQues]}
          </button>
          <button
            className={`singleOption ${selected === 2 && ifcorrect} ${
              selected === 2 && ifwrong
            } ${ifwrong && choiceC[currQues] === answers[currQues] && "select"}`}
            key="2"
            onClick={() => handleCheckC(currQues)}
            disabled={selected}
          >
            {choiceC[currQues]}
          </button>
          <button
            className={`singleOption ${selected === 3 && ifcorrect} ${
              selected === 3 && ifwrong
            } ${ifwrong && choiceD[currQues] === answers[currQues] && "select"}`}
            key="3"
            onClick={() => handleCheckD(currQues)}
            disabled={selected}
          >
            {choiceD[currQues]}
          </button>
        </div>
        <div className="controls">
          <Button
            colorScheme="red"
            w="30%"
            h="50px"
            fontSize="18px"
            fontWeight="medium"
            href="/prequiz"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button color="primary" style={{ width: 185 }} onClick={handleNext}>
            {currQues === answers.length - 1 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
