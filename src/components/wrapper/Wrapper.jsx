import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

function Wrapper(props) {
  return (
    <>
      <TopBar />
      <Flex>
        <Box flex={{ base: 0, md: 0.15, lg: 0.15 }}>
          <SideBar />
        </Box>
        <Box flex={{ base: 1, md: 0.85, lg: 0.85 }}>{props.children}</Box>
      </Flex>
    </>
  );
}

export default Wrapper;
