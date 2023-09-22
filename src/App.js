import { Route } from "react-router-dom/cjs/react-router-dom.min";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import ViewCourse from "./components/ViewCourse/ViewCourse";
import OurTeam from "./components/OurTeam/OurTeam";

function App() {
  return (
    <div style={{ backgroundColor: "primaryColor" }} w="100%" className="hi">
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/landing" component={LandingPage}></Route>
      <Route exact path="/courses" component={ViewCourse}></Route>
      <Route exact path="/our-team" component={OurTeam}></Route>
    </div>
  );
}

export default App;
