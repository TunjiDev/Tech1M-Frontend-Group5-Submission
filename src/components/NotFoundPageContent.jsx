import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logowhite.png";
import styles from "./NotFoundPageContent.module.css";

function NotFoundContent() {
  const navigate = useNavigate();

  return (
    <Flex
      h={"100vh"}
      className={styles.background}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      onClick={() => navigate("/")}
    >
      <Box cursor={"pointer"} mb={"1rem"}>
        <Image src={logo} alt="Tech1M Juniors Logo" />
      </Box>
      <Text color={"white"} mb={"1rem"} fontSize={"2rem"}>
        404, Page Not Found!
      </Text>
      <Text
        backgroundColor={"white"}
        px={"1rem"}
        py={".5rem"}
        borderRadius={".5rem"}
        color={"#003e9c"}
        cursor={"pointer"}
        _hover={{ bg: "gray" }}
        onClick={() => navigate("/")}
      >
        Go Back
      </Text>
    </Flex>
  );
}

export default NotFoundContent;
