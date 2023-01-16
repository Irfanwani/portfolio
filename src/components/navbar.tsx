import { Box, Link, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { motion, useViewportScroll } from "framer-motion";

function Navbar() {
  const [activePage, setActivePage] = useState("home");
  const history = useNavigate();
  const { scrollYProgress } = useViewportScroll();

  return (
    <Flex
      // as={motion.header}
      // initial={{ y: -100, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // exit={{ y: -100, opacity: 0 }}
      // transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      // bg="gray.800"
      // p={4}
      // align="center"
      // h={scrollYProgress.interpolate({
      //   range: [0, 0.5],
      //   output: ["10vh", "8vh"],
      //   extrapolate: "clamp",
      // })}
      // opacity={scrollYProgress.interpolate({
      //   range: [0, 0.5],
      //   output: [1, 0.7],
      //   extrapolate: "clamp",
      // })}
    >
      {/* <Box mr={8}>
        <Link 
          color="white"
          _hover={{}}
          fontSize={activePage === "home" ? "lg" : "md"} 
          onClick={() => {
              setActivePage("home");
              history.push("/")
          }}
        >
          Home
        </Link>
      </Box>
      <Box mr={8}>
        <Link 
          color="white"
          _hover={{}}
          fontSize={activePage === "about" ? "lg" : "md"} 
          onClick={() => {
              setActivePage("about");
              history.push("/about")
          }}
        >
          About
        </Link>
      </Box>
      <Box mr={8}>
        <Link 
          color="white"
          _hover={{}}
          fontSize={activePage === "projects" ? "lg" : "md"} 
          onClick={() => {
              setActivePage("projects");
              history.push("/projects")
          }}
        >
          Projects
        </Link>
      </Box>
      <Box mr={8}>
        <Link 
          color="white"
          _hover={{}}
          fontSize={activePage === "contact" ? "lg" : "md"} 
          onClick={() => {
              setActivePage("contact");
              history.push("/contact")
          }}
        >
          Contact
        </Link>
      </Box> */}
    </Flex>
  );
}


export default Navbar