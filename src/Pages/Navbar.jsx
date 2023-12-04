import { Box, Button, Flex, textDecoration } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Text } from "@chakra-ui/react";

const Navbar = () => {
  const [page, setPage] = useState(1);
 

  const handlePage = (id) => {
    if (id === 1) {
      setPage(id);
    } else if (id === 2) {
      setPage(id);
    } else if (id === 3) {
      setPage(id);
    } else if (id === 4) {
      setPage(id);
    } else if (id === 5) {
      setPage(id);
    }
  };
  return (
    <div id="nav-menu" >
      <Flex
        position="fixed"
        h="75px"
        bg={"black"}
        justifyContent="space-between"
        w="100%"
        color="gray.500"
        fontWeight="bold"
        fontFamily="sans-serif"
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        zIndex={1000}
      >
        <Flex
          ml="10px"
          w={["100%", "100%", "100%", "20%", "20%"]}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
        >
          <Text color={"white"} marginLeft="20px" id="icon" fontSize="30px">
            Nitesh
            <Text color={"#d11243"} as="span">
              Chandrakar
            </Text>
          </Text>
        </Flex>
        <Flex
          display={["none", "none", "none", "flex ", "flex"]}
          width="50%"
          justifyContent="space-around"
          alignItems="center"
          textTransform="uppercase"
          fontWeight="bold"
          fontFamily="serif"
        >
          <Text
            color={page === 1 ? "#d11243" : "white"}
            textDecoration={page === 1 ? "underline" : ""}
            _hover={{
              bg: "#d11243",
              p: "10px",
              color: "#ecf0f3",
              rounded: "10px",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            fontSize="20px"
          >
            <Link  class="nav-link home" onClick={() => handlePage(1)} to="home" smooth={true}>
              Home


            </Link>
          </Text>

         
          <Text
            color={page === 2 ? "#d11243" : "white"}
            textDecoration={page === 2 ? "underline" : ""}
            _hover={{
              bg: "#d11243",
              p: "10px",
              color: "#ecf0f3",
              rounded: "10px",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            fontSize="20px"
          >
            <Link class="nav-link about" onClick={() => handlePage(2)} to="about" smooth={true}>
              About
            </Link>
          </Text>
          <Text
            color={page === 3 ? "#d11243" : "white"}
            textDecoration={page === 3 ? "underline" : ""}
            _hover={{
              bg: "#d11243",
              p: "10px",
              color: "#ecf0f3",
              rounded: "10px",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            fontSize="20px"
          >
            <Link class="nav-link projects" onClick={() => handlePage(3)} to="projects" smooth={true}>
              Projects
            </Link>
          </Text>
          <Text
            color={page === 4 ? "#d11243" : "white"}
            textDecoration={page === 4 ? "underline" : ""}
            _hover={{
              bg: "#d11243",
              p: "10px",
              color: "#ecf0f3",
              rounded: "10px",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            fontSize="20px"
          >
            <Link class="nav-link skills" onClick={() => handlePage(4)} to="skills" smooth={true}>
              Skills
            </Link>
          </Text>
          <Text
            color={page === 5 ? "#d11243" : "white"}
            textDecoration={page === 5 ? "underline" : ""}
            _hover={{
              bg: "#d11243",
              p: "10px",
              color: "#ecf0f3",
              rounded: "10px",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            fontSize="20px"
          >
            <Link onClick={() => handlePage(5)} to="graph" smooth={true}>
              Github
            </Link>
          </Text>
          <Text
            color={page === 6 ? "#d11243" : "white"}
            textDecoration={page === 6 ? "underline" : ""}
            _hover={{
              bg: "#d11243",
              p: "10px",
              color: "#ecf0f3",
              rounded: "10px",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            fontSize="20px"
          >
            <Link class="nav-link contact" onClick={() => handlePage(6)} to="contact" smooth={true}>
              Contact
            </Link>
          </Text>
          <Text
            color={page === 6 ? "#d11243" : "white"}
            textDecoration={page === 6 ? "underline" : ""}
            _hover={{
              bg: "#d11243",
              p: "10px",
              color: "#ecf0f3",
              rounded: "10px",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            fontSize="20px"
          >
            <a style={{ textDecoration: "none" }} 
             href="Nitesh_Chandrakar_Resume.pdf"
             target="_blank"
             download = "Nitesh_Chandrakar_Resume.pdf"
            >
              <Text 
               
               onClick={()=> window.open(`https://drive.google.com/file/d/1Yrhafee9FGzVQrV3a8f1vIIGu_gUCgyL/view?usp=sharing`)}
              id="resume-button-1"
              class="nav-link resume"
                _hover={{ colorScheme: "#d11243", variant: "outline" }}
                h="35px"
                w="140px"
                fontSize="20px"
                bg={"#d11243"}
                rounded={5}
                fontWeight="bold"
                border="none"
                color="#f1f1f1"
                variant="solid"
              >
                RESUME
              </Text>
            </a>
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
