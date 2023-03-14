import React from "react";
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, useMediaQuery } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { BsChatSquareDots } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import logo from "../../assets/images/logoblue.png";

function TopBar() {
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");

  return (
    <Flex
      bg={"#FFFEFE"}
      zIndex={10}
      h={"8vh"}
      justifyContent={"space-evenly"}
      position={"absolute"}
      top={"2rem"}
      w={"full"}
    >
      <Box>
        <Image src={logo} alt="Tech1M Juniors Logo" />
      </Box>

      <Box>
        <InputGroup>
          <Input
            type="text"
            id="search"
            sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
            placeholder="search"
          />
          <InputLeftElement children={<CiSearch color={"#96C0FF"} />} />
        </InputGroup>
      </Box>

      <Flex>
        <Box>
          <BsChatSquareDots color={"#96C0FF"} />
        </Box>
        <Box>
          <CiBellOn color={"#96C0FF"} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default TopBar;
