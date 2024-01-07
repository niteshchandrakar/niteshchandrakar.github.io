import React from "react";
import { Box } from "@chakra-ui/react";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Graph from "./Graph";

const HolePage = () => {
  return (
    <Box w="100%">
      <Box id="home">
        <Home />
      </Box>
      <Box id="about" className="about section">
        <About />
      </Box>
      <Box id="skills" class="skills-card">
        <Skills />
      </Box>
      <Box id="projects" class="project-card">
        <Work />
      </Box>
      <Box id="graph">
        <Graph />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
    </Box>
  );
};

export default HolePage;
