import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Home.css";
import { Button, Menu, MenuItem, MenuList, Select } from "@chakra-ui/react";
import { useLocation } from "react-router-dom"

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const location = useLocation();
  let title = location.state;
  console.log(title);

  const history = useHistory();

  const handleSubmit = () => {
    fetchQuestions(title);
      history.push("/quiz");
  };


  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Start Quiz</span>
        <div className="settings__select">
          <Button
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
