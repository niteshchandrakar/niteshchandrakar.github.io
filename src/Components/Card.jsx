import { Box, Button, Center, Flex, Heading, HStack, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const Card = ({ title, description, tech, links, img }) => {
  
   
  return (
    <Box  className="project-card" w={["350px", "350px", "350px", "400px", "400px"]} m="auto" rounded={10} bg={"#f1f1f1"} h="500px" p="10px 15px 50px 15px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}>
      <Stack>
        <Image rounded={10} h="200px" w="100%" src={img} />
        
          <Text textAlign="center" as="text" fontWeight={"bold"} fontSize='l' className="project-title">{title}</Text>
        
        <Text mt={"0px"} class="project-description" color="#919497">{description}</Text>

          <Flex mt={"0px"} m="auto"  ml="10%"  spacing={50}>
          <a style={{ color: "#d11243",marginLeft:"50px",marginRight:"30px" }}  href={links[0]} target="#">
            <Box
             class="project-github-link"
              rounded="20%"
            
              
            >
              <Image size="30px"
              className="project-github-link"
             
              borderRadius={"15px"}
                src="https://camo.githubusercontent.com/410d86e43f847d3f6e3027fa6f0c2fb7641d893fa601d863a943eac968c41890/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"
              />
            </Box>
          </a>
          <a style={{ color: "#d11243" }} href={links[1]} target="#">
            <Box
             
              rounded="10%"
             

            >
              <Image
              src="https://camo.githubusercontent.com/2aa883d52783b24f65681fa3a20b76e914ca9cdbda511170ddae263b8c692c2e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65746c6966792d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e65746c696679266c6f676f436f6c6f723d23303043374237"
             
              borderRadius={"15px"}
              className="project-deployed-link"
            
                size="30px" color={"#"}/>
            </Box>
          </a>
        </Flex>
        <Center>

        <Text as="h5" fontWeight={"bold"} >Tech Stack</Text>
        </Center>
        <Wrap pl={"5%"}  >
          
          {tech.map((el)=>(
            

            <WrapItem   >
    <Center  w='90px'   >
      <Image h={"30px"} borderRadius={"5px"}  src={el} alt={el} />
    </Center>
  </WrapItem>
          
          ))}
  

</Wrap>
      
      </Stack>
    </Box>
  );
};

export default Card;





