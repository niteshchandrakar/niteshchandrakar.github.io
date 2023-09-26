import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../Components/Card";
import { project } from "../Components/Data/Project";
import { dark, orange } from "./Navbar";
import './responsive.css';

const Work = () => {
  const arr = new Array(10).fill(0)
  return (
    <Box    h="auto"  pb="40px">
      <Box py="40px" textAlign="center">
          <Heading color={"#d11243"} fontSize={["20px","30px","30px"]}  as="span">
          My Projects

        </Heading>
      </Box>
      <Grid w="auto" p="10px" templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} gap={10}>
        {
          project.map(({id,title , description, tech , img ,links }) => <Card  key={id} title={title} description={description} tech={tech} img={img}  links={links}/> )
        
        }
      </Grid>
      
    </Box>
  );
};

export default Work;
