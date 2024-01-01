import { Box, Flex, Heading, Stack, Button, Text, Image } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import './responsive.css';


const Home = () => {
//done
  return (
    <Flex  display={["grid", "grid", "grid", "flex", "flex"]} pt={"75px"}  justifyContent="space-around">
      <Flex   justifyContent="center" alignItems="center">
        <Box  w="80%" rounded="100%" bg="#f1f1f1" overflow="hidden" boxShadow={"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}>
          <Image class="home-img" src="https://avatars.githubusercontent.com/u/115460375?s=400&u=3cc3c7a9f1925c44fe5ae898885ed292f9481ac4&v=4" />
        </Box>
      </Flex>

      <Flex w={["100%", "100%", "100%", "40%", "40%"]} justifyContent="center" alignItems="center">
        <Stack textAlign={["center", "center", "center", "", ""]} spacing={1} w="100%"  >
          <Box >
            {" "}
            <Text color="white" fontSize={["15px", "20px", "25px", "35px", "35px"]} fontWeight="bold" fontFamily="sans-sarif">
              Hello , my name is
            </Text>
          </Box>
          <Box mt="-20px">
            {" "}
            <Text id="user-detail-name" color="#d11243" fontSize={["50px", "60px", "70px", "100px", "100px"]} fontWeight="bold" fontFamily="roboto">
              Nitesh
            </Text>
          </Box>
          <Box mt="-30px">
            {" "}
            <Text
              fontSize={["30px", "30px", "30px", "35px", "35px"]}
              fontWeight="bold"
              fontFamily="sans-sarif"
              color={"white"}
            >
              <Typewriter
                
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I'm a Full Stack Developer.")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </Text>
          </Box>
          <a style={{ textDecoration: "none" }}
                  id="resume-link-2"
                  href="Nitesh_Chandrakar_Resume.pdf"
                  target="_blank"
                  download = "Nitesh_Chandrakar_Resume.pdf"
                 
              
              
              >
            <Button
             onClick={()=> window.open(`https://drive.google.com/file/d/1OfOGHgpDF01w62S9ZtZxKqHtBACKwu0m/view?usp=sharing`)}
              id="resume-button-2"
              _hover={{
                h: "60px",
                w: "160px",
                bg: "#d11243",
                p: "10px",
                color: "#ecf0f3",
                rounded: "10px",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              h="45px"
              w="140px"
              fontSize="20px"
              bg={"#d11243"}
              rounded={5}
              fontWeight="bold"
              border="none"
              color="#f1f1f1"
              variant="solid"
            >
          
              Resume
             
            </Button>
            </a>
        </Stack>
      </Flex>

    </Flex>
  );
};

export default Home;
