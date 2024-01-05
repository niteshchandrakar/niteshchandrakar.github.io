import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import './responsive.css';
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  
    useEffect(() => {
      Aos.init({duration:1200});
    }, []);
  return (
    // all done
    <Box  >
      <Flex pb="30px"   justifyContent="center">

          
          <Heading  py="40px" fontSize={["20px","30px","30px"]} color={"#d11243"} as="span">
          All About me
        </Heading>
      </Flex>
      <Flex h="500px" justifyContent="space-around" >
        <Flex  display={["none" , "none" , "none" ,"flex" ,"flex"]} w="50%" justifyContent="center">
          <Box w="100%" h="400px">
            <Image data-aos="zoom-in-right" mt={"-35px"}  w="650px" h="400px" ml="5%" src="https://c0.wallpaperflare.com/preview/648/404/42/shade-developer-dev-code.jpg" />
          </Box>
        </Flex>
        <Flex data-aos="zoom-in-left"   w={["100%" , "100%", "100%" , "50%","50%"]} justifyContent="center" alignItems="center">
          <Stack w="450px" h="600px">
            <UnorderedList id="user-detail-intro" color="white" fontSize={20}>
              <ListItem mb="20px">
                Hello , I am Nitesh and I enjoy doing coding{" "}
              </ListItem>
              <ListItem mb="20px">
                An aspiring Full Stack Developer with 1200+ hours of coding
                experience in web .
              </ListItem>
              <ListItem mb="20px">
                A dedicated team player enthusiastic to be part of a reputed
                company. Always looking forward to learning something new to
                strengthen skills learned.
              </ListItem>
              <ListItem mb="20px">
                Fast Forwarding to today, I built a number of web applications and 6 major projects. learned a great deal about teamwork, leadership, and communication.
              </ListItem>
              <ListItem mb="20px">My Interest in Cricket</ListItem>
            </UnorderedList>
          </Stack>
        </Flex>
      </Flex >
    </Box>
  );
};

export default About;
