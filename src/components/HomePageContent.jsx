import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./HomePageContent.module.css";
import { HomeIconComponent } from "../assets/HomeIcon.jsx";
import { RightArrowIconComponent } from "../assets/RightArrowIcon";
import logo from "../assets/images/logowhite.png";

function HomePageContent() {
  return (
    <Box h={"100vh"} className={styles.background} position={"relative"}>
      <Image src={logo} alt="Tech1M Juniors Logo" position={"absolute"} top={"45%"} left={"10%"} />
      <Flex
        w={"50vw"}
        background={"#1E1717"}
        height={"full"}
        mixBlendMode={"normal"}
        opacity={0.7}
        position={"absolute"}
        right={"10rem"}
        px={"5rem"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex h={"50%"} direction={"column"} alignItems={"start"} justifyContent={"center"}>
          <Heading color={"#FFFEFE"} mb={"1.5rem"}>
            Welcome
          </Heading>

          <Text color={"#FFFEFE"} textAlign={"start"} mb={"4rem"}>
            Get ready to explore the exciting world of technology and learn new skills that will help you shape your
            future.
          </Text>

          <Flex
            backgroundColor={"#0065FF"}
            color={"#FFFFFF"}
            w={"full"}
            py={".5rem"}
            borderRadius={"0.5rem"}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <HomeIconComponent color /> <Text mx={"1rem"}>Let's Get Started</Text> <RightArrowIconComponent />
          </Flex>

          <Text textAlign={"center"} w={"full"} color={"#FFFEFE"}>
            Already have an account!{" "}
            <Link to="/login" className={styles.link}>
              Log in
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default HomePageContent;
