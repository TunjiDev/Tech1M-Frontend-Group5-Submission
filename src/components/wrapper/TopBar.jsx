import React, { useContext } from "react";
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
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { BsChatSquareDots, BsGear } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import AuthContext from "../../context-store/authContext";
import logo from "../../assets/images/logoblue.png";
import avatar from "../../assets/images/avatar.png";

function TopBar() {
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");
  const authCtx = useContext(AuthContext);

  return (
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
      <Box flex={1} mb={{ base: "1rem", md: 0, lg: 0 }}>
        <Image src={logo} alt="Tech1M Juniors Logo" />
      </Box>

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
            <Text color={"#0065FF"}>Adams Chuks</Text>
            <Text color={"#6B788E"} fontSize={"0.625rem"} fontWeight={500}>
              {`${authCtx.role === "Super Admin" ? "Super Admin" : "Instructor"}`}
            </Text>
          </Box>
        </Flex>

        <Box cursor={"pointer"}>
          <BsGear color={"#96C0FF"} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default TopBar;
