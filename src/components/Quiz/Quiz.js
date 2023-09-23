import { useEffect, useState } from "react";
import Question from "../Question/Question";
import { Flex, Spinner } from "@chakra-ui/react";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <Flex w="100%" h="100vh" direction="column" align="center" justify="center">
      {questions ? (
        <>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
          <Flex w="100%" align="center" justify="center">
            <span>Score : {score}</span>
          </Flex>
        </>
      ) : (
        <Spinner w={20} h={20} marginTop="200px" size="xl" alignSelf="center" />
      )}
    </Flex>
  );
};

export default Quiz;
