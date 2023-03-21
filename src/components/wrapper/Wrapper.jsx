import React from "react";
import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import HiddenSideBar from "./HiddenSideBar";

function Wrapper(props) {
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");
  const [showSideBar, setShowSideBar] = React.useState(false);

  const sidebarHandler = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <TopBar onClick={sidebarHandler} />
      {showSideBar && <HiddenSideBar onClick={sidebarHandler} />}
      <Flex>
        <Box display={isLowerThan400 ? "none" : null} flex={{ base: 0, md: 0.15, lg: 0.15 }}>
          <SideBar />
        </Box>
        <Box flex={{ base: 1, md: 0.85, lg: 0.85 }}>{props.children}</Box>
      </Flex>
    </>
  );
}

export default Wrapper;
