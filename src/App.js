<<<<<<< HEAD
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import LandingPage from "./components/LandingPage";
import HomePage from './components/HomePage';


function App() {
  return (
    <div style={{backgroundColor : "#4f8098"}} w="100%">
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/landing" component={LandingPage}></Route>
    </div>
=======
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoursesSwiper from "./components/CoursesSwiper";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

const generalStyles = {
  "font-family": "'Poppins', sans-serif",
};

function App() {
  return (
    <Box sx={generalStyles}>
      <Navbar />
      <Hero />
      <CoursesSwiper />
      <Footer />
    </Box>
>>>>>>> 52e0ce14e7c123017dc1aba9e9762f2c3fa40192
  );
}

export default App;
