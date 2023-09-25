import Navbar from "../Navbar/Navbar";
import Video from "./Video";
import Footer from "../Footer";
import { Flex } from "@chakra-ui/react";
import Playlist from "./Playlist";
import { useState } from "react";

function Personalize() {
  const [video, setVideo] = useState(1);

  function handleClick(id) {
    setVideo(id);
  }

  return (
    <div>
      <Navbar />
      <Flex w="100%" p="30px">
        <Video video={video} />
        <Playlist handleClick={handleClick} />
      </Flex>
      <Footer />
    </div>
  );
}

export default Personalize;
