import React, { useContext } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./PaymentsPageContent.module.css";
import AuthContext from "../context-store/authContext";
import payment1 from "../assets/images/payments/payment-1.png";
import payment2 from "../assets/images/payments/payment-2.png";
import payment3 from "../assets/images/payments/payment-3.png";
import uparrow from "../assets/uparrow.png";
import downarrow from "../assets/downarrow.png";
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";

function PaymentsPageContent() {
  const authCtx = useContext(AuthContext);

  return (
    <Box w={"full"}>
      <Box mt={"6rem"} px={"4rem"} mb={"2rem"}>
        <Flex justifyContent={"space-between"} mb={"1rem"}>
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
                <Image src={uparrow} />
                <Image src={downarrow} />
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
                <Image src={uparrow} />
                <Image src={downarrow} />
              </Box>
            </Flex>

            <Flex cursor={"pointer"} fontSize={"0.75rem"} fontWeight={500} alignItems={"center"}>
              <Text mr={".5rem"} color={"#C2C7D0"}>
                STATUS
              </Text>
              <Box>
                <Image src={uparrow} />
                <Image src={downarrow} />
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          bg={"#F5F6F7"}
          px={"1rem"}
          py={"1rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={".5rem"}
        >
          <Flex alignItems={"center"}>
            <Box mr={".5rem"}>
              <Image src={payment1} alt="Fundamentals of Web Development" />
            </Box>
            <Box w={"70%"}>
              <Text color={"#003E9C"}>Smith Rans</Text>
              <Text color={"#003E9C"}>Fundamentals of Web Development</Text>
              <Text color={"#B3B9C4"} fontSize={".75rem"}>
                Invoice #249801
              </Text>
            </Box>
          </Flex>
          <Box color={"#B3B9C4"}>
            <Text textAlign={"right"}>$345</Text>
            <Text textAlign={"right"}>Accepted</Text>
            <Text textAlign={"right"}>4 JAN 2023</Text>
          </Box>
        </Flex>

        <Flex
          bg={"#F5F6F7"}
          px={"1rem"}
          py={"1rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={".5rem"}
        >
          <Flex alignItems={"center"}>
            <Box mr={".5rem"}>
              <Image src={payment2} alt="Introduction to UI/UX Design Course" />
            </Box>
            <Box w={"70%"}>
              <Text color={"#003E9C"}>Toms Kid</Text>
              <Text color={"#003E9C"}>Introduction to UI/UX Design Course</Text>
              <Text color={"#B3B9C4"} fontSize={".75rem"}>
                Invoice #249801
              </Text>
            </Box>
          </Flex>
          <Box color={"#B3B9C4"}>
            <Text textAlign={"right"}>$345</Text>
            <Text textAlign={"right"}>Accepted</Text>
            <Text textAlign={"right"}>4 JAN 2023</Text>
          </Box>
        </Flex>

        <Flex
          bg={"#F5F6F7"}
          px={"1rem"}
          py={"1rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={".5rem"}
        >
          <Flex alignItems={"center"}>
            <Box mr={".5rem"}>
              <Image src={payment3} alt="App Web Development" />
            </Box>
            <Box w={"70%"}>
              <Text color={"#003E9C"}>Tomide Williams</Text>
              <Text color={"#003E9C"}>App Web Development</Text>
              <Text color={"#B3B9C4"} fontSize={".75rem"}>
                Invoice #249801
              </Text>
            </Box>
          </Flex>
          <Box color={"#B3B9C4"}>
            <Text textAlign={"right"}>$345</Text>
            <Text textAlign={"right"}>Accepted</Text>
            <Text textAlign={"right"}>4 JAN 2023</Text>
          </Box>
        </Flex>

        <Flex
          bg={"#F5F6F7"}
          px={"1rem"}
          py={"1rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={".5rem"}
        >
          <Flex alignItems={"center"}>
            <Box mr={".5rem"}>
              <Image src={payment1} alt="Fundamentals of Web Development" />
            </Box>
            <Box w={"70%"}>
              <Text color={"#003E9C"}>Adeolu Babs</Text>
              <Text color={"#003E9C"}>Fundamentals of Web Development</Text>
              <Text color={"#B3B9C4"} fontSize={".75rem"}>
                Invoice #249801
              </Text>
            </Box>
          </Flex>
          <Box color={"#B3B9C4"}>
            <Text textAlign={"right"}>$345</Text>
            <Text textAlign={"right"}>Declined</Text>
            <Text textAlign={"right"}>4 JAN 2023</Text>
          </Box>
        </Flex>

        <Flex
          bg={"#F5F6F7"}
          px={"1rem"}
          py={"1rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={".5rem"}
        >
          <Flex alignItems={"center"}>
            <Box mr={".5rem"}>
              <Image src={payment3} alt="App Development" />
            </Box>
            <Box w={"70%"}>
              <Text color={"#003E9C"}>Chuks Emeka</Text>
              <Text color={"#003E9C"}>App Development</Text>
              <Text color={"#B3B9C4"} fontSize={".75rem"}>
                Invoice #249801
              </Text>
            </Box>
          </Flex>
          <Box color={"#B3B9C4"}>
            <Text textAlign={"right"}>$580</Text>
            <Text textAlign={"right"}>Pending</Text>
            <Text textAlign={"right"}>4 JAN 2023</Text>
          </Box>
        </Flex>

        <Flex
          bg={"#F5F6F7"}
          px={"1rem"}
          py={"1rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={".5rem"}
        >
          <Flex alignItems={"center"}>
            <Box mr={".5rem"}>
              <Image src={payment3} alt="App Development" />
            </Box>
            <Box w={"70%"}>
              <Text color={"#003E9C"}>Ben Bush</Text>
              <Text color={"#003E9C"}>App Development</Text>
              <Text color={"#B3B9C4"} fontSize={".75rem"}>
                Invoice #249801
              </Text>
            </Box>
          </Flex>
          <Box color={"#B3B9C4"}>
            <Text textAlign={"right"}>$580</Text>
            <Text textAlign={"right"}>Pending</Text>
            <Text textAlign={"right"}>4 JAN 2023</Text>
          </Box>
        </Flex>

        <Flex mt={"2rem"} color={"#96C0FF"} justifyContent={"center"} alignItems={"center"}>
          <Text cursor={"pointer"}>
            <Image src={leftarrow} />
          </Text>
          <Text cursor={"pointer"} ml={"1rem"}>
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
            color={"#FFFEFE"}
            bg={"#0065FF"}
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
          >
            2
          </Text>
          <Text cursor={"pointer"} mr={"1rem"}>
            Next
          </Text>
          <Text cursor={"pointer"}>
            <Image src={rightarrow} />
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default PaymentsPageContent;
