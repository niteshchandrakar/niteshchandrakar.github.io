import {
  Box,
  Flex,
  Heading,
  Stack,
  Button,
  Text,
  Image,
  Input,
  Textarea,
  VStack,
  Toast,
  color,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./responsive.css";
import axios from 'axios'

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number:"",
    message: "",
  });

  let name, value;
  const getUserdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { name, email, number, message } = user; 
    
    if(name && email  && number ,message){
      const payload = {
        name,
        email,
        phone:number,
        msg:message
      }

      axios.post("" , payload)
      .then((r) => alert("Send"))
      .then(() => {
        setUser({
          name: "",
          email: "",
          number:"",
          message: "",
        })
      })
      .catch((e) => alert("Send"))
    }else{
      alert("Kindly Please fill the all details")
    }
    
  }

  

  


  return (
    <Box>
      <Flex py="40px"  justifyContent="center">   
          <Heading fontSize={["20px","30px","30px"]} color={"#d11243"} as="span">
          Chat And Connect With Me
  
        </Heading>
      </Flex>
      <Flex h="600px"   justifyContent="space-around">
        <Flex display={["none" , "none" , "none" ,"flex" ,"flex"]} w="30%" justifyContent={"center"} alignItems="center" bg="">
          <Box > 
            <a href="">
              <Box display={"flex"} alignItems="center"  justifyContent={"space-between"} bg="" marginBottom={"10%"}> 
              <img width="50px" src="data:image/jpeg;base64,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" alt="" />
              <Text id="contact-phone" fontSize={"25px"} color="white">+91 9754601089</Text>
            
              </Box>
            </a>
            <a href="">
              <Box display={"flex"} alignItems="center" marginBottom={"10%"}  justifyContent={"space-between"} bg=""> 
              <img  width="50px"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABEVBMVEX////qQzVChfQ0qFPFIh/7vAQwp1A/g/RYkfVNsGbJKSX6tRLpNzf/vQDqPzDoJw7pOirAAADNEwDpLBfpOyv7uAAziv7pLxvJGQDHHhMmp1TEGhb97u386ej75OP9+fn3xsPrUUXwg3zipKPNTkz//ffPW1r8yFHahYT81H7+7MrYfXzKQD77wjHxjojsVkt0cce7NUjsuxpPguv2vblIqlLrSz67tjX629n0qKTubmbudm71sa1ArFyExZOx2LoVoUHk8edit3bs8f7vz8793Jj8z23lsK/94qv7wjDUcG/sw8P8zmn+6cD+9uXkqqmDsEafVInym5a4OVGZWZTjsiP9ra2Krve0yvore/Nqm/Y9HUL2AAAHY0lEQVR4nO3baVvbRhSG4ZGxBXWCwcXGISwmAcIe2oamhIRAWLM03dsA//+HVCNvsjyamXNGyxkz76d8iGz0XHPLvrIwJtjl2u56tVwuV9c/r122Rb/Dom3sXF3vV/g2r6929K65eVGv1xcXy3yLi8Gv12/szbDxcbPZrPTXbDY3P6quWdoK7r88vKDD1lIeP3Dq29iOBuh32N6QXbRVXyiLtlDfyuvnTnHbowG6GbYTr/myUBcW4KsvXub406exnUpSgiBC5av4ot3kAmEFu45C4iGQHIX2njxBEGHPnqfCxr48QRBhf+SidlX8JIhusf6lgNvB7KuqQLjYo7FdjX8a2OxB4SAhwp5WAjs8qB309il62WfVs8AiD3oOwjV/HVx2o52AvgddB50I/Y/INiQBbQ/6DroReo+EXfVHgiUeAA66u+5cuAw7BuFRoOkB5KB7EH4Lr4QegzACQQ9QB5GDAHwadEfPA9xB5yDwJ8LvqAbkPCAcdBrwP09Y1/x6NLKFAzoelg4e4RJUKvtYCnzVWmu16HvvbrX1GN0gwHCJb+B5cy+LvvtwL+c8gwY7bM2kgTdLwMPSwaxn0uAK9ck4aOAV72G1VfNMGlS22QvsI7HToHAPgQPPrMEm28Mm6DUo1EPowLDBJ1Y1blCgh44DwwYVhk4waFCYh64DGg0K8dB3QKSBV5tbzTnBwAGVBrl7iDig0yBXD0MOCDXI0cPqXM2j2SA3DzEHtBrk4mHEAbEGOXgYdUCtQeYeBA7oNfBmn2XnQeiAYIMMPYgdUGyQmYcEBzQbZOJh6VmCA6INAg+HKSdIdkC1QeDheaoJJA7oNkjVg9QB4QYpepA7oNwgNQ/P5Q5oN0jFg9IB8QYpeDhUOqDewNiDhgP6DYw8aDkwbvAk8wYGHvQcGDaYZj88wf6Fo3YDtAdNB0YNpqf/YPOvfkQeBUCDwMMyuMCyrgOTBtM//fyUlUrzf36feQOEB30HBg2mf3k6MRE0KM3jPIAagD0AHKAbBA6CBGGDEs4DsAHIA8gBtgF3MNFrgPMAbQDwAHOAbBA6iDTAeAA30PYAdIBq0HUQbYDwgGjgzb5We1h+DXSAadBzMNQA7gHTwKvNqDzAHSAa9B3EGkA9oBooPSAcgBtEHMQbAD0gG0g9oBxAG0QdjDSAecA2kHjAOQA2GHIgaADxgG6Q6AHpANQg5kDUAODBoIHQA9oBpEHcgbCBvgeTBoLvS3gHgAYjDhIa6HowajDiwcCBdgOBg6QGmh4MGwx5MHKg20DkILGBngfTBpHPh8MZEweaDYQOJA10PBg36HswdKDVIMGBrEHg4W+FhxQahB6MHfCpGiQ5kDYIKvwj95BGA6/W+qtl6oBP0SDRgaKBykMqDYKjkMqrSBtIHKgaKDyk1CCdyRrIHCgbyD3Y0kDqQKOBzIMdDRQOdBpIPFjRQOVAq0GyBxsaKB1oNkjyQL+BhgPdBgkeyDfQcaDdQOyBegMtB4AGgYeFuAfaDTQdQBoIPJBuoOsA1GDUA+UG2g6ADeIe6DYAOIA2iHkg2wDiANxg2APVBiAHiAZRDzQbAB1gGkQ8kGwAdYBqMPBAsQHYAbJBzwO9BggH2AZdD+QaYBygG3Q8UGuAcmDQIPRQ9H1H9/gRzoFJA+6hVfSNRzb7L86BUYPS5NSbmaLvvL+Z/77zsQmMGrCjRqPomw/XaByxohqw9jEFD63jNiuuAWMEPMy84T9IgQ3YUa1YD9xB0Q0K9hA6KLxBoR46Dgg0KMxDo3bEqDQoyEPfAYkG3EMa/5ICtIEDIg1y9xB1QKUBY7l6GHJAp0GeHoYdEGqQm4e4A0oNcvLQOha8M50GOXiojTog1iBzDyIH1Bow9jZLD0IH9Bqwd5l5SHBAsEFmHpIcUGyQkYdEBzQbZOChNvNO9oYEG7CVlD3IHFBtkLKH1lvFu9FskKIHhQPCDdiKl46HhreifC+qDVLyoHRAu0EKHjQcEG8QeDD7zzo6Dqg3MPSg5YB+AwMPmg4saID2oOvAhgZID9oO7GiA8ABwYEkDsIdZgANbGgA9gBzY0wDgAejAogbaHqAObGqg6QHswK4GGh4QDixroPSAcWBbA4UHlAP7Gkg8IB1Y2CDRA9aBjQ0SPKAd2NlA4MHAgaUNRjyYOLC1QcyDkQN7G0Q8GDqwuEHfg6kDmxt0PRg74LO3Afdg7oDP4gZs5cDcAZ/NDdKaa+Aa8LkGrgGfa+Aa8LkGrgGfa+Aa8LkGrgGfa+Aa8LkGrgGfa+Aa8LkGrgGfa+Aa8LkGrgGfa+Aa8LkGrgGfa2DW4NWDb3DC7icfeAP/nH178A3es9u7h97glF089AZnHxj6oTgmDfyT4GIshjFpcHbKr57EPRXHpIEfXo08COPRoHMMGPIrwlg0CL4cdFfCRBiHBr7fv/7iDhFhDBr4/HOxtwvESbC/ge9/GHqJe/BRsL7B2Xn8NW4ngR8Pdjfwz/xTwavcTt3dAb4r2NvA9/2zE1EBvovbb/dTY9/g5Pz96dCD4H+/Rd4gDmYkVAAAAABJRU5ErkJggg==" alt="" />
              <Text id="contact-email" fontSize={"25px"} color="white">niteshchandrakar2@gmail.com</Text>
             
              </Box>
            </a>
            <a id="contact-github"  href="https://github.com/niteshchandrakar">
              <Box display={"flex"} alignItems="center"  marginBottom={"10%"}   justifyContent={"space-between"} bg=""> 
              <img  width="50px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiBwe7URF5iyjMW20qp4IvMNvys8-tGb_-A&usqp=CAU" alt="" /><Text fontSize={"25px"} color="white">nitesh-chandrakar</Text>
              </Box>
            </a>
            <a id="contact-linkedin" href="https://www.linkedin.com/in/nitesh-chandrakar-9a94ab242/" fontSize="50px">
              <Box display={"flex"} alignItems="center"  marginBottom={"15%"}  justifyContent={"space-between"} bg=""> 
              <img  width="50px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RYeN56EvozwyyxYGDw4dTu-pbUZyNxnF93zSLUcOlQ&s" alt="" /><Text fontSize={"25px"} color="white">Nitesh Chandrakar</Text>
              </Box>
            </a>
    
           
    
          </Box>
        </Flex>
        <VStack w={["100%" , "100%" , "100%", "30%","30%"]} pt="150px" overflow="hidden">
          <Stack direction="row" spacing={25}>
            <a
              style={{ textDecoration: "none" }}
              target="#"
              href="https://github.com/niteshchandrakar"
            >
              <Button     
                rounded={5}
                leftIcon={<BsGithub />}
                fontSize="19px"
               colorScheme="whiteAlpha"
                variant='outline'
                _hover={{color:"black",backgroundColor:"white"}}
              >
                Github
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              target="#"
              href="https://www.linkedin.com/in/nitesh-chandrakar-9a94ab242/"
            >
              <Button
                rounded={5}
                leftIcon={<BsLinkedin />}
                fontSize="19px"
                colorScheme='linkedin' 
                variant='outline'
              >
                Linkedin
              </Button>
            </a>
          </Stack>
          <Input
            id="fname"
            name="name"
            required
            value={user.name}
            onChange={getUserdata}
            pl="10px"
            m={"2% 0"}
            w="88%"
            h="42px"
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid #d11243" }}
            placeholder="Enter Full Name"
            color={"white"}
          />
          <Input
            id="email"
            name="email"
            required
            value={user.email}
            onChange={getUserdata}
            pl="10px"
            w="88%"
            h="42px"
            type="email"
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid #d11243" }}
            placeholder="Enter Email"
            color={"white"}
          />
          <Input
          color={"white"}
           type="number"
            pl="10px"
            w="88%"
            required
            h="42px"
            name="number"
            value={user.number}
            onChange={getUserdata}
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid #d11243" }}
            placeholder="Enter Mobile Number"
          />
          <Textarea
          color={"white"}
            pl="10px"
            w="88%"
            h="100px"
            id="subject"
            gap="2%"
            required
            name="message"
            value={user.message}
            onChange={getUserdata}
            fontSize="13px"
            rounded={10}
            _active={{ border: "1px solid #d11243" }}
            placeholder="Enter Massage"
          />
          <Button
            onClick={sendData}
            _hover={{ cursor: "pointer" }}
            w="90%"
            border="none"
            rounded={10}
            color="white"
            bg={"#d11243"}
            h="45px"
          >
           Contact Me
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Contact;
