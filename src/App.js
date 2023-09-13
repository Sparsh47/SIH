import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import LandingPage from "./components/LandingPage";
import HomePage from './components/HomePage';


function App() {
  return (
    <div style={{backgroundColor : "#4f8098"}} w="100%" className='hi'>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/landing" component={LandingPage}></Route>
    </div>
  );
}

export default App;
