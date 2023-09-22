import { useEffect, useState } from "react";
import Question from "../Question/Question";
import "./Quiz.css";
import {  Spinner } from "@chakra-ui/react";

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
    <div className="quiz">
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
          <div className="quizInfo">
            <span>Score : {score}</span>
          </div>
        </>
      ) : (
        <Spinner w={20} h={20} marginTop="200px" size="xl" alignSelf="center" />
      )}
    </div>
  );
};

export default Quiz;
