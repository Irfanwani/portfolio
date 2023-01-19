import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
    variant='ghost'
      onClick={toggleColorMode}
      aria-label="moon"
      icon={
        colorMode == "light" ? <MoonIcon bgSize={5} /> : <SunIcon bgSize={5} />
      }
    />
  );
};

export default ThemeButton;
