import { Route } from "react-router-dom/cjs/react-router-dom.min";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import ViewCourse from "./components/ViewCourse/ViewCourse";

function App() {
  return (
    <div style={{ backgroundColor: "primaryColor" }} w="100%" className="hi">
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/landing" component={LandingPage}></Route>
      <Route exact path="/courses" component={ViewCourse}></Route>
    </div>
  );
}

export default App;
