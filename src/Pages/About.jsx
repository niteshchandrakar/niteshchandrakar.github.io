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
import React from "react";
import './responsive.css';

const About = () => {
  return (
    <Box bg={"#ecf0f3"} >
      <Flex pb="40px"  bg={"#ecf0f3"} justifyContent="center">

          
          <Heading py="40px" fontSize={["20px","30px","30px"]} color={"#d11243"} as="span">
          All About me
        </Heading>
      </Flex>
      <Flex h="500px" justifyContent="space-around" bg={"#ecf0f3"}>
        <Flex  display={["none" , "none" , "none" ,"flex" ,"flex"]} w="50%" justifyContent="center">
          <Box w="100%" h="400px">
            <Image  w="650px" h="400px" ml="5%" src="https://wallpaperaccess.com/full/2945080.jpg" />
          </Box>
        </Flex>
        <Flex   w={["100%" , "100%", "100%" , "50%","50%"]} justifyContent="center" alignItems="center">
          <Stack w="450px" h="600px">
            <UnorderedList color="#919497" fontSize={20}>
              <ListItem mb="20px">
                Hello , I am Aarif and I enjoy doing coding{" "}
              </ListItem>
              <ListItem mb="20px">
                An aspiring Full Stack Developer with 800+ hours of coding
                experience in JavaScript.
              </ListItem>
              <ListItem mb="20px">
                A dedicated team player enthusiastic to be part of a reputed
                company. Always looking forward to learning something new to
                strengthen skills learned.
              </ListItem>
              <ListItem mb="20px">
                Fast Forwarding to today, I built a number of web applications and 3 major projects. learned a great deal about teamwork, leadership, and communication.
              </ListItem>
              <ListItem mb="20px">My Interest in Travelling</ListItem>
            </UnorderedList>
          </Stack>
        </Flex>
      </Flex >
    </Box>
  );
};

export default About;
