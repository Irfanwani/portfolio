import { Box, Link, Flex, Text, Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import dp from "../assets/dp.png";
import ThemeButton from "./themebutton";

function Navbar() {
  const navigate = useNavigate();
  return (
    <Box position="absolute" zIndex="1000" top={0} left={0} right={0}>
      <Flex align="center" justify="space-evenly" px={6} py={6}>
        <Link onClick={() => navigate("/")}>
          <Flex alignItems="center">
            <Avatar mr={2} size="sm" src={dp} name="Irfan" />
            <Text fontWeight="medium" fontSize="xl">
              Irfan wani
            </Text>
          </Flex>
        </Link>
        <Link onClick={() => navigate("/about")} mr={4}>
          <Text fontWeight="medium" fontSize="lg">
            About
          </Text>
        </Link>
        <Link onClick={() => navigate("/projects")} mr={4}>
          <Text fontWeight="medium" fontSize="lg">
            Projects
          </Text>
        </Link>
        <Link onClick={() => navigate("/contact")}>
          <Text fontWeight="medium" fontSize="lg">
            Contact
          </Text>
        </Link>
        <ThemeButton />
      </Flex>
    </Box>
  );
}
export default Navbar;
