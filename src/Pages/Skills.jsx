import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
// import { dark, darkSecond, orange } from "./Navbar";
import skills from "../Components/Data/Skills";
import tools from "../Components/Data/tools"
import './responsive.css';
import "aos/dist/aos.css";
import Aos from "aos";

const Skills = () => {
    useEffect(() => {
      Aos.init({duration:1200});
    }, []);
  return (
    <Box m="auto"  h="auto">
      <Flex py="40px"  justifyContent="center">
        <Heading fontSize={["20px","30px","30px"]} color={"#d11243"}>
          My Technical Skills
  
        </Heading>
      </Flex>
      <Grid
        templateColumns={["repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)","repeat(6, 1fr)","repeat(8, 1fr)"]}
        w="auto"
        p="20px"
        margin="auto"
        gap={5}
        h="auto"
        
      >
        {skills.map(({icon,text}) => {
          return (
            <>
              <Flex key={text}
              data-aos="zoom-in-up"
               className="skills-card"
                _hover={{ boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", transition: "all 0.9s" }}
                alignItems="center"
                bg={"#f1f1f1"}
                justifyContent="center"
                w="140px"
                rounded={7}
                h="160px"
              >
                <VStack>
                  <Image className="skills-card-img" src={icon} w="100px" h="100px" />
                  <Text className="skills-card-name" color="BLACK">{text}</Text>
                </VStack>
              </Flex>
            </>
          );
        })}
      </Grid>
      <Flex py="40px"  justifyContent="center">
        <Heading fontSize={["20px","30px","30px"]} color={"#d11243"}>
          Tech Tools
  
        </Heading>
        
      </Flex>
      <Grid
        templateColumns={["repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)","repeat(6, 1fr)","repeat(8, 1fr)"]}
        w="auto"
        p="20px"
        margin="auto"
        gap={6}
        h="auto"
      
      
        
      >
        {tools.map(({icon,text}) => {
          return (
            <>
              <Flex key={text}
               className="skills-card"
                _hover={{ boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", transition: "all 0.9s" }}
                alignItems="center"
                bg={"#f1f1f1"}
                justifyContent="center"
                data-aos="zoom-in-up"
                w="140px"
                rounded={7}
                h="160px"
              >
                <VStack>
                  <Image className="skills-card-img" src={icon} w="100px" h="100px" />
                  <Text className="skills-card-name" color="BLACK">{text}</Text>
                </VStack>
              </Flex>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Skills;
