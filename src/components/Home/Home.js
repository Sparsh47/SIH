import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Home.css";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Menu,
  MenuItem,
  MenuList,
  Select,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Home = ({ name, setName, fetchQuestions, fetchTopics, topics }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const location = useLocation();
  let title = location.state;
  console.log(title);

  const history = useHistory();

  useEffect(() => {
    fetchTopics(title);
  }, []);

  const handleSubmit = () => {
    fetchQuestions(title);
    history.push("/quiz");
  };

  return (
    <div className="content hiii">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Select Topics</span>
        {topics.length !== 0 ? (
          <CheckboxGroup colorScheme="green">
            <Stack spacing={[1, 5]} direction={["column"]} marginTop={5} marginBottom={3}>
              {topics.map((topic, index) => (
                <Checkbox
                  size="lg"
                  key={index}
                  value={topic}
                  paddingX={8}
                >
                  <Box padding={3.5} paddingX={4} rounded={15} marginLeft={2} bg="gray.200" fontWeight={500}>{topic}</Box>
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        ) : (
          <Spinner w={20} h={20} marginY = "280px" size="xl" alignSelf="center" />
        )}
        <div className="settings__select">
          <Button onClick={handleSubmit}>Start Quiz</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
