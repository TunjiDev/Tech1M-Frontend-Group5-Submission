import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  FormControl,
  Image,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormHelperText,
  useMediaQuery,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import logo from "../assets/images/logoblue.png";
import { EmailIcon } from "@chakra-ui/icons";
import styles from "./ForgotPassword.module.css";

function ForgotPasswordContent() {
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");

  return (
    <Flex h={"100vh"} className={styles.background} justifyContent={"center"} alignItems={"center"}>
      <FormControl
        bg={"white"}
        w={{ base: "90%", md: "50%", lg: "30%" }}
        p={{ base: "1rem", md: "2rem", lg: "2rem" }}
        borderRadius={"0.5rem"}
      >
        <Flex justifyContent={"center"} alignItems={"center"} mb={"1rem"}>
          <Image src={logo} alt="Tech1M Juniors Logo" />
        </Flex>

        <Text textAlign={"center"} color={"#FA0724"} fontSize={"0.625rem"}>
          An email with password reset link will be sent to you registered email address. If it exists on our system.
        </Text>

        <Box>
          <FormLabel fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }} color={"#003E9C"} htmlFor="email">
            Email Address
          </FormLabel>
          <InputGroup>
            <Input
              type="email"
              id="email"
              sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
              placeholder="example@gmail.com"
            />
            <InputRightElement children={<EmailIcon color={"#96C0FF"} />} />
          </InputGroup>
          <FormHelperText fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }} color={"#C2C7D0"}>
            Enter your valid email address
          </FormHelperText>
        </Box>

        <Flex
          backgroundColor={"#0065FF"}
          color={"#FFFFFF"}
          w={"full"}
          py={".5rem"}
          borderRadius={"0.5rem"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
          mt={"2rem"}
          mb={"1rem"}
        >
          <RepeatIcon /> <Text mx={"1rem"}>Reset</Text>
        </Flex>

        <Text textAlign={"center"} w={"full"} color={"#091E42"} fontSize={".75rem"} fontWeight={500} mb={"1rem"}>
          Don't have an account!{" "}
          <Link to="/signup" className={styles.link}>
            Sign up
          </Link>
        </Text>
      </FormControl>
    </Flex>
  );
}

export default ForgotPasswordContent;
