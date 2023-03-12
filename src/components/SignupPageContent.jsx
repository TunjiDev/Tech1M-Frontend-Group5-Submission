import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  FormHelperText,
  Select,
  Text,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import styles from "./SignupPageContent.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RightArrowIconComponent } from "../assets/RightArrowIcon";
import logo from "../assets/images/logowhite.png";

function SignupPageContent() {
  const [show, setShow] = React.useState(false);
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");

  const handleClick = () => setShow(!show);

  return (
    <Box className={styles.background} h={"100vh"}>
      <Image
        src={logo}
        alt="Tech1M Juniors Logo"
        position={"absolute"}
        top={{ base: "5%", md: "42%", lg: "42%" }}
        left={"10%"}
        h={{ base: "3rem", md: "4rem", lg: "4.938rem" }}
        w={{ base: "10rem", md: "12rem", lg: "14.313rem" }}
      />
      <FormControl
        bg={"white"}
        w={{ base: "98%", md: "50%", lg: "50%" }}
        minHeight={"70vh"}
        position={"absolute"}
        right={{ base: "1rem", md: "5rem", lg: "10rem" }}
        p={{ base: "1rem", md: "2rem", lg: "2rem" }}
        top={{ base: "16%", md: "10%", lg: "10%" }}
        borderRadius={"0.5rem"}
      >
        <Flex mb={"1.8rem"}>
          <Box flex={1} mr={"1.8rem"}>
            <FormLabel fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }} color={"#003E9C"} htmlFor="full-name">
              Enter your fullname
            </FormLabel>
            <InputGroup>
              <Input
                type="text"
                id="full-name"
                sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
                placeholder="Adams Chuks"
              />
              <InputRightElement children={<IoPersonOutline color={"#96C0FF"} />} />
            </InputGroup>
            <FormHelperText fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }} color={"#C2C7D0"}>
              Enter your full name without special character
            </FormHelperText>
          </Box>

          <Box flex={1}>
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
              Enter a valid email without space
            </FormHelperText>
          </Box>
        </Flex>

        <Flex mb={"1.8rem"}>
          <Box flex={1} mr={"1.8rem"}>
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
              Enter a strong password
            </FormHelperText>
          </Box>

          <Box flex={1}>
            <FormLabel fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }} color={"#003E9C"} htmlFor="phone-number">
              Phone Number
            </FormLabel>
            <InputGroup>
              <Input
                type="tel"
                id="phone-number"
                sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
                placeholder="phone number"
              />
              <InputRightElement children={<BsTelephone color={"#96C0FF"} />} />
            </InputGroup>
            <FormHelperText fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }} color={"#C2C7D0"}>
              Enter your phone number with country code
            </FormHelperText>
          </Box>
        </Flex>

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
          Select your role
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
          <RightArrowIconComponent /> <Text mx={"1rem"}>Sign up</Text>
        </Flex>

        <Text textAlign={"center"} w={"full"} color={"#091E42"} fontSize={".75rem"} fontWeight={500}>
          Already have an account!{" "}
          <Link to="/login" className={styles.link}>
            Log in
          </Link>
        </Text>
      </FormControl>
    </Box>
  );
}

export default SignupPageContent;
