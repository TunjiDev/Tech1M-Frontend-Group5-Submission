import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Spinner,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { EmailIcon } from "@chakra-ui/icons";
import useInput from "../hooks/useInput";
import logo from "../assets/images/logoblue2.png";
import styles from "./ForgotPasswordPageContent.module.css";

function ForgotPasswordPageContent() {
  const [httpError, setHttpError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isWidthLowerThan400] = useMediaQuery("(max-width: 30rem)");
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const isEmail = (value) => value.trim() !== "" && value.includes("@");
  let formIsValid = false;

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  if (emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    if (!formIsValid) {
      return;
    }
    setIsLoading(true);

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_API_KEY}`, {
      method: "POST",
      body: JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: emailValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          setEmailSent(true);
          resetEmailInput();

          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } else {
          return res.json().then((data) => {
            let errorMessage = "Reset Failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .catch((err) => {
        setHttpError(err.message);

        setTimeout(() => {
          setHttpError(null);
        }, 3000);
      });
  };

  const emailInputClasses = emailInputHasError ? `${styles.invalid}` : ``;

  let content = null;

  if (httpError)
    content = (
      <Text className={styles.errorText} textAlign={"center"}>
        {httpError}
      </Text>
    );
  if (isLoading) content = <Spinner />;

  return (
    <Flex h={"100vh"} className={styles.background} justifyContent={"center"} alignItems={"center"}>
      <FormControl
        bg={"white"}
        w={{ base: "90%", md: "50%", lg: "30%" }}
        p={{ base: "1rem", md: "2rem", lg: "2rem" }}
        borderRadius={"0.5rem"}
      >
        <Flex justifyContent={"center"} alignItems={"center"} mb={"1rem"}>
          <Image src={logo} alt="Tech1M Juniors Logo" w={"7.688rem"} h={"2.688rem"} />
        </Flex>

        <Text textAlign={"center"} color={"#FA0724"} fontSize={"0.625rem"}>
          {emailSent
            ? "An email with password reset link will be sent to you registered email address. If it exists on our system."
            : ""}
        </Text>

        <Box className={emailInputClasses}>
          <FormLabel fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }} color={"#003E9C"} htmlFor="email">
            Email Address
          </FormLabel>
          <InputGroup>
            <Input
              type="email"
              id="email"
              sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isWidthLowerThan400 ? ".7rem" : "1rem"}` } }}
              placeholder="example@gmail.com"
              value={emailValue}
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
              required
            />
            <InputRightElement children={<EmailIcon color={"#96C0FF"} />} />
          </InputGroup>
          <FormHelperText
            fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }}
            color={`${emailInputHasError ? "#fa0724" : "#C2C7D0"}`}
          >
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
          onClick={submitHandler}
        >
          <RepeatIcon /> <Text mx={"1rem"}>{isLoading ? content : "Reset"}</Text>
        </Flex>

        {!isLoading && httpError && content}

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

export default ForgotPasswordPageContent;
