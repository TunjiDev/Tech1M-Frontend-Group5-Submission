import React from "react";
import { Box } from "@chakra-ui/react";

function SideBar() {
  return (
    <Box bg={"red"} color={"white"} w={"10vw"} h={"80vh"} position={"absolute"} left={0} top={0} zIndex={-1}>
      SideBar
    </Box>
  );
}

export default SideBar;
