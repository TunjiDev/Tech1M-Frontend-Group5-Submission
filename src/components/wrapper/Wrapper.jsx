import React from "react";
import { Flex, Box, useMediaQuery, useDisclosure } from "@chakra-ui/react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import HiddenSideBar from "./HiddenSideBar";

function Wrapper(props) {
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sidebarHandler = () => {
    onOpen();
  };

  return (
    <>
      <TopBar onClick={sidebarHandler} />
      {isOpen && <HiddenSideBar onClose={onClose} isOpen={isOpen} onClick={sidebarHandler} />}
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
