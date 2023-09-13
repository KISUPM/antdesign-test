import { Box } from "@chakra-ui/react";
// import Dashboard from "./Pages/Dashboard";
import classes from "./App.module.css";
import CarouselTest from "./Pages/CarouselTest";
function App() {
  return (
    <Box
      w="100vw"
      h="100dvh"
      bg="#232323"
      color="#fff"
      p="1rem"
      className={classes.mainBox}
    >
      {/* <Dashboard /> */}
      <CarouselTest />
    </Box>
  );
}

export default App;
