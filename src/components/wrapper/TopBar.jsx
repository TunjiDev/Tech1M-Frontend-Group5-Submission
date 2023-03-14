import React from "react";
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
import logo from "../../assets/images/logoblue.png";
import avatar from "../../assets/images/avatar.png";

function TopBar() {
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");

  return (
    <Flex
      bg={"#FFFEFE"}
      zIndex={10}
      h={"10vh"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      position={"absolute"}
      top={"1.5rem"}
      w={"full"}
      px={"2rem"}
    >
      <Box flex={1}>
        <Image src={logo} alt="Tech1M Juniors Logo" />
      </Box>

      <Box flex={3} ml={"5rem"}>
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

      <Flex flex={2} justifyContent={"center"} alignItems={"center"}>
        <Box mr={"1rem"} position="relative">
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
        <Box mr={"1rem"} position="relative">
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
              Super Admin
            </Text>
          </Box>
        </Flex>

        <Box>
          <BsGear color={"#96C0FF"} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default TopBar;
