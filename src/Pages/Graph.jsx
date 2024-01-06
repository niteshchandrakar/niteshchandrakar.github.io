import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./responsive.css";
import Github from "react-github-calendar"
import "aos/dist/aos.css";
import Aos from "aos";


const Graph = () => {
    
  return (
    <Box  py="40px" m="auto"  h="auto">
      <Flex py="40px"  justifyContent="center">
        <Heading fontSize={["20px","30px","30px"]} color={"#d11243"} as="span">
          Github Graph & Github Statistics
        </Heading>

      </Flex>
      <Flex align={"center"} justify="center"   gap={5} flexDirection="column"  >
        <VStack align={"center"} justify="center">
         <Box  >
         <p   align="center"><Image id="github-streak-stats" w={[320,500,700]} py={2} m="auto" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=niteshchandrakar&theme=default" alt="niteshchandrakar" /></p>
         </Box>

          <p  align="center"><Image w={[320,500,700]} py={2} m="auto" id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=niteshchandrakar&theme=default&show_icons=true&locale=en" alt="niteshchandrakar" /></p>

          <p   align="center"><Image w={[320,500,700]} py={2} m="auto" id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs?username=niteshchandrakar&show_icons=true&locale=en&layout=compact" alt="niteshchandrakar" /></p>
        </VStack>
        <Box  bg={"white"} borderRadius={"5px"} px={5}>
          <Github  class="react-activity-calendar" username="niteshchandrakar" color={"#d11243"} blockSize={15} blockMargin={5} fontSize={16}/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Graph;
