import { Route } from "react-router-dom/cjs/react-router-dom.min";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import ViewCourse from "./components/ViewCourse/ViewCourse";
import { useState } from "react";
import axios from "axios";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import OurTeam from "./components/OurTeam/OurTeam";
import UserProfile from "./components/Profile/UserProfile";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple#`
    );

    setQuestions(data.results);
  };

  return (
    <div style={{ backgroundColor: "primaryColor" }} w="100%" className="hi">
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/landing" component={LandingPage}></Route>
      <Route exact path="/courses" component={ViewCourse}></Route>
      <Route path="/prequiz" exact>
        <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
      </Route>
      <Route path="/quiz">
        <Quiz
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
        />
      </Route>
      <Route path="/result">
        <Result name={name} score={score} setScore={setScore} />
      </Route>
      <Route exact path="/our-team" component={OurTeam}></Route>
      <Route exact path="/profile" component={UserProfile}></Route>
    </div>
  );
}

export default App;
