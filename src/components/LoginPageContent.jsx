import React, { useState, useContext } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiOutlineEye } from "react-icons/ai";
import { RightArrowIconComponent } from "../assets/icons/RightArrowIcon";
import logo from "../assets/images/logoblue.png";
import styles from "./LoginPageContent.module.css";
import useInput from "../hooks/useInput";
import AuthContext from "../context-store/authContext";

const isEmail = (value) => value.trim() !== "" && value.includes("@");
const isNotEmptyAndGreaterThan8 = (value) => value.trim() !== "" && value.trim().length >= 8;
const isRole = (value) => value === "Super Admin" || value === "Instructor";

function LoginPageContent() {
  const [show, setShow] = React.useState(false);
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");
  const [httpError, setHttpError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

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
    value: roleValue,
    isValid: roleIsValid,
    hasError: roleInputHasError,
    valueChangeHandler: roleChangedHandler,
    inputBlurHandler: roleBlurHandler,
  } = useInput(isRole);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid && roleIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    if (!formIsValid) {
      return;
    }
    setIsLoading(true);

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_LOGIN_API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
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

        const role = localStorage.getItem("role");
        const fullName = localStorage.getItem("fullName");

        authCtx.userFunc(fullName, roleValue);

        if (role === "Super Admin" && roleValue === "Super Admin") navigate("/dashboard-admin");
        else if (role === "Instructor" && roleValue === "Instructor") navigate("/dashboard-instructor");

        if (role === "Super Admin" && roleValue === "Instructor") {
          return;
        } else if (role === "Instructor" && roleValue === "Super Admin") {
          return;
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
  const passwordInputClasses = passwordInputHasError ? `${styles.invalid}` : ``;

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
          top={{ base: "16%", md: "4%", lg: "4%" }}
          borderRadius={"0.5rem"}
        >
          <Flex justifyContent={"center"} alignItems={"center"} mb={"1rem"}>
            <Image src={logo} alt="Tech1M Juniors Logo" />
          </Flex>
          <Box mb={"1.2rem"} className={emailInputClasses}>
            <FormLabel fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }} color={"#003E9C"} htmlFor="email">
              Email Address
            </FormLabel>
            <InputGroup>
              <Input
                type="email"
                id="email"
                sx={{ "::placeholder": { color: "#96C0FF", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
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

          <Box mb={"1.2rem"} className={passwordInputClasses}>
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
              />
              <InputRightElement
                children={<AiOutlineEye onClick={handleClick} color={show ? "#003E9C" : "#96C0FF"} />}
                cursor={"pointer"}
              />
            </InputGroup>
            <FormHelperText
              fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }}
              color={`${passwordInputHasError ? "#fa0724" : "#C2C7D0"}`}
            >
              {passwordInputHasError ? "Password should be at least 8 characters long" : "Enter your password"}
            </FormHelperText>
          </Box>

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
          >
            <option>Super Admin</option>
            <option>Instructor</option>
          </Select>
          <FormHelperText
            fontSize={{ base: ".6rem", md: ".75rem", lg: ".75rem" }}
            color={`${roleInputHasError ? "#fa0724" : "#C2C7D0"}`}
          >
            {roleInputHasError ? "Role must be either Super Admin or Instructor" : "Select your role to continue"}
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
            <RightArrowIconComponent /> <Box mx={"1rem"}>{isLoading ? content : "Log in"}</Box>
          </Flex>

          {!isLoading && httpError && content}

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
