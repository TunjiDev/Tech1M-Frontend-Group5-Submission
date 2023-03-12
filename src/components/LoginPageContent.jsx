import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  FormControl,
  Text,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiOutlineEye } from "react-icons/ai";
import { RightArrowIconComponent } from "../assets/RightArrowIcon";
import logo from "../assets/images/logoblue.png";
import styles from "./LoginPageContent.module.css";

function LoginPageContent() {
  const [show, setShow] = React.useState(false);
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  return (
    <Box className={styles.background} h={"100vh"}>
      <Flex
        w={{ base: "98%", md: "48%", lg: "48%" }}
        background={"#e6f0ff"}
        height={"full"}
        position={"absolute"}
        right={{ base: "1rem", md: "0rem", lg: "0rem" }}
        px={{ base: "1rem", md: "2rem", lg: "5rem" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <FormControl
          bg={"white"}
          w={{ base: "98%", md: "80%", lg: "60%" }}
          minHeight={"70vh"}
          position={"absolute"}
          right={{ base: "0rem", md: "5rem", lg: "8rem" }}
          p={{ base: "1rem", md: "2rem", lg: "2rem" }}
          top={{ base: "16%", md: "10%", lg: "10%" }}
          borderRadius={"0.5rem"}
        >
          <Flex justifyContent={"center"} alignItems={"center"} mb={"1rem"}>
            <Image src={logo} alt="Tech1M Juniors Logo" />
          </Flex>
          <Box mb={"1.2rem"}>
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

          <Box mb={"1.2rem"}>
            <FormLabel fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }} color={"#003E9C"} htmlFor="password">
              Password
            </FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                id="password"
                sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
                placeholder="Enter password"
              />
              <InputRightElement children={<AiOutlineEye onClick={handleClick} color={"#96C0FF"} />} />
            </InputGroup>
            <FormHelperText fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }} color={"#C2C7D0"}>
              Enter your password
            </FormHelperText>
          </Box>

          <FormLabel fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }} color={"#003E9C"}>
            Role
          </FormLabel>
          <Select
            sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
            placeholder="Select Role"
          >
            <option>Instructor</option>
            <option>Student</option>
          </Select>
          <FormHelperText fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }} color={"#C2C7D0"}>
            Select your role to continue
          </FormHelperText>

          <Flex
            backgroundColor={"#0065FF"}
            color={"#FFFFFF"}
            w={"full"}
            py={".5rem"}
            borderRadius={"0.5rem"}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
            mt={"3rem"}
            mb={"1rem"}
          >
            <RightArrowIconComponent /> <Text mx={"1rem"}>Log in</Text>
          </Flex>

          <Text textAlign={"center"} w={"full"} color={"#091E42"} fontSize={".75rem"} fontWeight={500} mb={"1rem"}>
            Don't have an account!{" "}
            <Link to="/signup" className={styles.link}>
              Sign up
            </Link>
          </Text>

          <Text
            color={"#A6AEBB"}
            textAlign={"center"}
            fontSize={"0.625rem"}
            onClick={() => navigate("/forgot-password")}
            cursor={"pointer"}
          >
            Forgot Password?
          </Text>
        </FormControl>
      </Flex>
    </Box>
  );
}

export default LoginPageContent;
