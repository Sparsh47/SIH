import Navbar from "../Navbar/Navbar";
import Video from "./Video";
import Footer from "../Footer";
import { Flex } from "@chakra-ui/react";
import Playlist from "./Playlist";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Personalize() {
  const location = useLocation();
  const { id } = location.state || {};
  console.log("COURSE ID:", id);
  const [video, setVideo] = useState(1);

  function handleClick(courseId) {
    setVideo(courseId);
  }

  return (
    <div>
      <Navbar />
      <Flex w="100%" p="30px">
        <Video video={video} courseId={id} />
        <Playlist handleClick={handleClick} courseId={id} />
      </Flex>
      <Footer />
    </div>
  );
}

export default Personalize;
