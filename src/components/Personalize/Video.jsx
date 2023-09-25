import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { courseVideos } from "./courseAbout";

function Video({ video }) {
  return (
    <Flex w="100%" h="fit-content">
      <Box w="100%">
        <AspectRatio maxW="70vw" ratio={16 / 9}>
          <iframe
            src={courseVideos[video - 1].videoUrl}
            title={courseVideos[video - 1].title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </AspectRatio>
      </Box>
    </Flex>
  );
}

export default Video;
