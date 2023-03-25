import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useMediaQuery,
  Avatar,
  Text,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useColorMode,
  Switch,
  Tooltip,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { BsChatSquareDots, BsGear } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import AuthContext from "../../context-store/authContext";
import logo from "../../assets/images/logoblue2.png";
import avatar from "../../assets/images/avatar.png";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function TopBar(props) {
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");
  const authCtx = useContext(AuthContext);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const Navigate = useNavigate();

  const sidebarHandler = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
    props.onClick();
  };

  const logoutHandler = () => {
    localStorage.removeItem("chakra-ui-color-mode");
    authCtx.logout();
    Navigate("/login");
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What would you like to do?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
              <Box mb={"1rem"}>
                <Button colorScheme="red" onClick={logoutHandler}>
                  Log Out
                </Button>
              </Box>
              <Flex justifyContent={"center"} w={"full"} alignItems={"center"}>
                <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
                <Text ml={".5rem"}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Text>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex
        bg={"#FFFEFE"}
        zIndex={10}
        h={"10vh"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        position={"absolute"}
        top={{ base: "4rem", md: "1.5rem", lg: "1.5rem" }}
        w={"100%"}
        px={"2rem"}
        direction={{ base: "column", md: "row", lg: "row" }}
      >
        <Flex flex={1} mb={{ base: "1rem", md: 0, lg: 0 }} justifyContent={"space-between"} alignItems={"center"}>
          {isLowerThan400 && <FaBars cursor={"pointer"} color={"#96C0FF"} size={30} onClick={sidebarHandler} />}
          <Box>
            <Image
              src={logo}
              alt="Tech1M Juniors Logo"
              w={isLowerThan400 ? "50%" : "70%"}
              h={isLowerThan400 ? "50%" : "70%"}
              m={"auto"}
            />
          </Box>
        </Flex>

        <Box
          flex={{ base: 1, md: 3, lg: 3 }}
          ml={{ base: ".5rem", md: "1rem", lg: "5rem" }}
          mb={{ base: "1rem", md: 0, lg: 0 }}
        >
          <InputGroup>
            <Input
              type="text"
              id="search"
              sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
              placeholder="Search"
            />
            <InputLeftElement children={<CiSearch color={"#96C0FF"} size={26} />} />
          </InputGroup>
        </Box>

        <Flex
          flex={{ base: 1, md: 1, lg: 2 }}
          justifyContent={"center"}
          alignItems={"center"}
          mb={{ base: "1rem", md: 0, lg: 0 }}
        >
          <Box mr={"1rem"} position="relative" cursor={"pointer"}>
            <BsChatSquareDots color={"#96C0FF"} size={20} />
            <Badge
              position={"absolute"}
              top={"-2"}
              right={"-2"}
              bg={"#01a830"}
              color={"#FFFEFE"}
              fontWeight={500}
              fontSize={"xs"}
              borderRadius={"50%"}
            >
              5
            </Badge>
          </Box>
          <Box mr={"1rem"} position="relative" cursor={"pointer"}>
            <CiBellOn color={"#96C0FF"} size={20} />
            <Badge
              position={"absolute"}
              top={-1.5}
              right={-1.5}
              bg={"#FA0724"}
              color={"#FFFEFE"}
              fontWeight={500}
              fontSize={"xs"}
              borderRadius={"50%"}
            >
              3
            </Badge>
          </Box>

          <Flex mr={"2rem"}>
            <Box mr={".2rem"}>
              <Avatar name="Adams Chuks" src={avatar} />
            </Box>
            <Box>
              <Text fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }} color={"#0065FF"}>
                Adams Chuks
              </Text>
              <Text color={"#6B788E"} fontSize={"0.625rem"} fontWeight={500}>
                {`${authCtx.role === "Super Admin" ? "Super Admin" : "Instructor"}`}
              </Text>
            </Box>
          </Flex>

          <Tooltip label={"Logout / Change color mode?"} placement={"bottom"}>
            <Box cursor={"pointer"} onClick={onOpen}>
              <BsGear color={"#96C0FF"} />
            </Box>
          </Tooltip>
        </Flex>
      </Flex>
    </>
  );
}

export default TopBar;
