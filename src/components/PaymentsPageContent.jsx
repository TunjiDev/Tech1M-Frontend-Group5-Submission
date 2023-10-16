import React, { useContext } from "react";
import { Box, Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./PaymentsPageContent.module.css";
import AuthContext from "../context-store/authContext";
import uparrow from "../assets/icons/uparrow.png";
import downarrow from "../assets/icons/downarrow.png";
import leftarrow from "../assets/icons/leftarrow.png";
import rightarrow from "../assets/icons/rightarrow.png";
import PaymentList from "./PaymentList";

function PaymentsPageContent() {
  const authCtx = useContext(AuthContext);
  const [nextPage, setNextPage] = React.useState(false);
  const [prevPage, setPrevPage] = React.useState(true);
  const [isHeightThan1200] = useMediaQuery("(min-height: 62.5rem)");

  const nextPageHandler = () => {
    setNextPage(true);
    setPrevPage(false);
  };

  const prevPageHandler = () => {
    setPrevPage(true);
    setNextPage(false);
  };

  return (
    <Box w={"full"} minH={"100vh"}>
      <Box
        mt={{ base: "12rem", md: "6rem", lg: `${isHeightThan1200 ? "8rem" : "6rem"}` }}
        px={{ base: "1rem", md: "2rem", lg: "4rem" }}
        mb={"2rem"}
      >
        <Flex
          direction={{ base: "column", md: "row", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={{ base: "center", md: null, lg: null }}
          mb={"1rem"}
        >
          <Box>
            <NavLink
              className={(navData) => (navData.isActive ? `${styles.active}` : `${styles.navbar__link}`)}
              to={`${authCtx.role === "Super Admin" ? "/dashboard-admin" : "/dashboard-instructor"}`}
            >
              Home/
            </NavLink>

            <NavLink
              className={(navData) => (navData.isActive ? `${styles.active}` : `${styles.navbar__link}`)}
              to="/payments"
            >
              Payments
            </NavLink>
          </Box>

          <Flex bg={"#FAFBFB"} py={".5rem"} pl={".5rem"}>
            <Flex cursor={"pointer"} fontSize={"0.75rem"} fontWeight={500} alignItems={"center"} mr={".5rem"}>
              <Text mr={".5rem"} color={"#C2C7D0"}>
                COURSE
              </Text>
              <Box>
                <Image src={uparrow} alt="icon" />
                <Image src={downarrow} alt="icon" />
              </Box>
            </Flex>

            <Flex cursor={"pointer"} fontSize={"0.75rem"} fontWeight={500} alignItems={"center"} mr={".5rem"}>
              <Text mr={".5rem"} color={"#0065FF"}>
                AMOUNT
              </Text>
              <Box>
                <Image src={uparrow} alt={"uparrow"} />
                <Image src={downarrow} alt={"downarrow"} />
              </Box>
            </Flex>

            <Flex cursor={"pointer"} fontSize={"0.75rem"} fontWeight={500} alignItems={"center"} mr={".5rem"}>
              <Text mr={".5rem"} color={"#C2C7D0"}>
                DATE
              </Text>
              <Box>
                <Image src={uparrow} alt="icon" />
                <Image src={downarrow} alt="icon" />
              </Box>
            </Flex>

            <Flex cursor={"pointer"} fontSize={"0.75rem"} fontWeight={500} alignItems={"center"}>
              <Text mr={".5rem"} color={"#C2C7D0"}>
                STATUS
              </Text>
              <Box>
                <Image src={uparrow} alt="icon" />
                <Image src={downarrow} alt="icon" />
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <PaymentList prevPage={prevPage} nextPage={nextPage} />

        <Flex mt={"2rem"} color={"#96C0FF"} justifyContent={"center"} alignItems={"center"}>
          <Text onClick={prevPageHandler} cursor={"pointer"}>
            <Image src={leftarrow} alt="icon" />
          </Text>
          <Text onClick={prevPageHandler} cursor={"pointer"} ml={"1rem"}>
            Prev
          </Text>
          <Text
            cursor={"pointer"}
            borderRadius={"0.125rem"}
            border={"1px solid #96C0FF"}
            px={".5rem"}
            py={".1rem"}
            mr={".1rem"}
            ml={".5rem"}
            color={prevPage ? "#FFFEFE" : "#96C0FF"}
            bg={prevPage && "#0065FF"}
            onClick={prevPageHandler}
          >
            1
          </Text>
          <Text
            cursor={"pointer"}
            borderRadius={"0.125rem"}
            border={"1px solid #96C0FF"}
            px={".5rem"}
            py={".1rem"}
            mr={".5rem"}
            color={nextPage ? "#FFFEFE" : "#96C0FF"}
            bg={nextPage && "#0065FF"}
            onClick={nextPageHandler}
          >
            2
          </Text>
          <Text onClick={nextPageHandler} cursor={"pointer"} mr={"1rem"}>
            Next
          </Text>
          <Text onClick={nextPageHandler} cursor={"pointer"}>
            <Image src={rightarrow} alt="icon" />
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default PaymentsPageContent;
