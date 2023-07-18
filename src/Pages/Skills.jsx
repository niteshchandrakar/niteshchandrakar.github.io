import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
// import { dark, darkSecond, orange } from "./Navbar";
import skills from "../Components/Data/Skills";
import './responsive.css';

const Skills = () => {
  return (
    <Box m="auto" bg={"#f1f1f1"} h="auto">
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
        gap={6}
        h="auto"
        bg={"#f1f1f1"}
      >
        {skills.map(({icon,text}) => {
          return (
            <>
              <Flex key={text}
               class="skills-card"
                _hover={{ boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", transition: "all 0.9s" }}
                alignItems="center"
                bg={"#f1f1f1"}
                justifyContent="center"
                w="140px"
                rounded={7}
                h="160px"
              >
                <VStack>
                  <Image class="skills-card-img" src={icon} w="100px" h="100px" />
                  <Text class="skills-card-name" color="BLACK">{text}</Text>
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
