import { Image } from "@chakra-ui/react";
import bg from "../assets/bg.jpg";
const Home = () => {
  return <Image src={bg} bg="green" brightness={'10%'} filter={'brightness(50%)'} />;
};

export default Home;
