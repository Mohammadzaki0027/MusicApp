import styles from "./Styles/Music.module.css";
import MainRoutes from "./Pages/MainRoutes";
import { background, Box, Button } from "@chakra-ui/react";
import React from "react";
import "./App.css";
function App() {
  const [darkmode, setDarkmode] = React.useState(false);
  const handelclick = () => {
    setDarkmode(!darkmode);
  };
  return (
    <Box className={darkmode ? "darkclass" : "lightclass"}>
    
      <div className={styles.nav}>
        <h1 className={styles.h1tag}>Music App Poster</h1>
      </div>
      <Button onClick={handelclick} colorScheme="telegram"  m={"20px"}>
        {darkmode ? "LightMode" : "Dark Mode"}
      </Button>
      <MainRoutes></MainRoutes>
    </Box>
  );
}

export default App;
