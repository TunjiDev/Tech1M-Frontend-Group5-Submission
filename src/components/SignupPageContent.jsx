import React, { useState, useContext } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import styles from "./SignupPageContent.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RightArrowIconComponent } from "../assets/icons/RightArrowIcon";
import logo from "../assets/images/logowhite.png";
import useInput from "../hooks/useInput";
import AuthContext from "../context-store/authContext";

const isNotEmptyAndGreaterThan8 = (value) => value.trim() !== "" && value.trim().length >= 8;
const isEmail = (value) => value.trim() !== "" && value.includes("@");
const isFullName = (value) => value.trim() !== "" && value.trim().split(" ").length >= 2;
const isPhoneNumber = (value) => value.trim() !== "" && value.trim().length >= 10;
const isRole = (value) => value === "Super Admin" || value === "Instructor";

function SignupPageContent() {
  const [show, setShow] = React.useState(false);
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");
  const [httpError, setHttpError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const handleClick = () => setShow(!show);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(isNotEmptyAndGreaterThan8);

  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameInputHasError,
    valueChangeHandler: fullNameChangedHandler,
    inputBlurHandler: fullNameBlurHandler,
  } = useInput(isFullName);

  const {
    value: phoneNumberValue,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberInputHasError,
    valueChangeHandler: phoneNumberChangedHandler,
    inputBlurHandler: phoneNumberBlurHandler,
  } = useInput(isPhoneNumber);

  const {
    value: roleValue,
    isValid: roleIsValid,
    hasError: roleInputHasError,
    valueChangeHandler: roleChangedHandler,
    inputBlurHandler: roleBlurHandler,
  } = useInput(isRole);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid && fullNameIsValid && phoneNumberIsValid && roleIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    if (!formIsValid) {
      return;
    }
    setIsLoading(true);

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          resetEmailInput();
          resetPasswordInput();
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(new Date().getTime() + Number(data.expiresIn * 1000));
        authCtx.login(data.idToken, expirationTime.toISOString());
        authCtx.userFunc(fullNameValue, roleValue);
      })
      .catch((err) => {
        setHttpError(err.message);

        setTimeout(() => {
          setHttpError(null);
        }, 3000);
      });
  };

  const emailInputClasses = emailInputHasError ? `${styles.invalid}` : ``;
  const passwordInputClasses = passwordInputHasError ? `${styles.invalid}` : ``;
  const fullNameInputClasses = fullNameInputHasError ? `${styles.invalid}` : ``;
  const phoneNumberInputClasses = phoneNumberInputHasError ? `${styles.invalid}` : ``;

  let content = null;

  if (httpError)
    content = (
      <Text className={styles.errorText} textAlign={"center"}>
        {httpError}
      </Text>
    );
  if (isLoading) content = <Spinner />;

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
        w={{ base: "100%", md: "50%", lg: "50%" }}
        minHeight={"70vh"}
        position={"absolute"}
        right={{ base: "0rem", md: "5rem", lg: "10rem" }}
        p={{ base: "1rem", md: "2rem", lg: "2rem" }}
        top={{ base: "16%", md: "10%", lg: "10%" }}
        borderRadius={"0.5rem"}
      >
        <Flex mb={"1.8rem"}>
          <Box flex={1} mr={"1.8rem"} className={fullNameInputClasses}>
            <FormLabel fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }} color={"#003E9C"} htmlFor="full-name">
              Enter your fullname
            </FormLabel>
            <InputGroup>
              <Input
                type="text"
                id="full-name"
                sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
                placeholder="Adams Chuks"
                required
                value={fullNameValue}
                onChange={fullNameChangedHandler}
                onBlur={fullNameBlurHandler}
                color={"black"}
              />
              <InputRightElement children={<IoPersonOutline color={"#96C0FF"} />} />
            </InputGroup>
            <FormHelperText
              fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }}
              color={`${fullNameInputHasError ? "#fa0724" : "#C2C7D0"}`}
            >
              Enter your full name without special character
            </FormHelperText>
          </Box>

          <Box flex={1} className={emailInputClasses}>
            <FormLabel fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }} color={"#003E9C"} htmlFor="email">
              Email Address
            </FormLabel>
            <InputGroup>
              <Input
                type="email"
                id="email"
                sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
                placeholder="example@gmail.com"
                required
                value={emailValue}
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                color={"black"}
              />
              <InputRightElement children={<EmailIcon color={"#96C0FF"} />} />
            </InputGroup>
            <FormHelperText
              fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }}
              color={`${emailInputHasError ? "#fa0724" : "#C2C7D0"}`}
            >
              Enter a valid email without space
            </FormHelperText>
          </Box>
        </Flex>

        <Flex mb={"1.8rem"} className={passwordInputClasses}>
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
                required
                value={passwordValue}
                onChange={passwordChangedHandler}
                onBlur={passwordBlurHandler}
                color={"black"}
              />
              <InputRightElement
                children={
                  <AiOutlineEye onClick={handleClick} color={show ? "#003E9C" : "#96C0FF"} cursor={"pointer"} />
                }
              />
            </InputGroup>
            <FormHelperText
              fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }}
              color={`${passwordInputHasError ? "#fa0724" : "#C2C7D0"}`}
            >
              {passwordInputHasError ? "Password should be at least 8 characters long" : "Enter a strong password"}
            </FormHelperText>
          </Box>

          <Box flex={1} className={phoneNumberInputClasses}>
            <FormLabel fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }} color={"#003E9C"} htmlFor="phone-number">
              Phone Number
            </FormLabel>
            <InputGroup>
              <Input
                type="tel"
                id="phone-number"
                sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
                placeholder="phone number"
                required
                value={phoneNumberValue}
                onChange={phoneNumberChangedHandler}
                onBlur={phoneNumberBlurHandler}
                color={"black"}
              />
              <InputRightElement children={<BsTelephone color={"#96C0FF"} />} />
            </InputGroup>
            <FormHelperText
              fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }}
              color={`${phoneNumberInputHasError ? "#fa0724" : "#C2C7D0"}`}
            >
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
          required
          value={roleValue}
          onChange={roleChangedHandler}
          onBlur={roleBlurHandler}
          color={"black"}
        >
          <option>Super Admin</option>
          <option>Instructor</option>
        </Select>
        <FormHelperText
          fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }}
          color={`${roleInputHasError ? "#fa0724" : "#C2C7D0"}`}
        >
          {roleInputHasError ? "Role must be either Super Admin or Instructor" : "Select your role"}
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
          onClick={submitHandler}
        >
          <RightArrowIconComponent /> <Box mx={"1rem"}>{isLoading ? content : "Sign up"}</Box>
        </Flex>

        {!isLoading && httpError && content}

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
