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
  );
}

export default App;
