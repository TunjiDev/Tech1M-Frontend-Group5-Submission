import React, { useContext } from "react";
import { Box, Flex, Text, Image, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context-store/authContext";
import uparrow from "../assets/icons/uparrow.png";
import downarrow from "../assets/icons/downarrow.png";
import leftarrow from "../assets/icons/leftarrow.png";
import rightarrow from "../assets/icons/rightarrow.png";
import styles from "./StudentsAdminPageContent.module.css";

function StudentsAdminPageContent() {
  const authCtx = useContext(AuthContext);

  return (
    <Box w={"full"}>
      <Box mt={"6rem"} px={"2rem"} mb={"2rem"}>
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
              to="/students-admin"
            >
              Students
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

        <TableContainer mt={"2rem"}>
          <Table variant="simple" spacing={2}>
            <Thead bg={"#E6F0FF"} borderLeftRadius={".1rem"} borderRightRadius={".1rem"}>
              <Tr>
                <Th color={"#6BA6FF"} fontWeight={500} fontSize={".75rem"}>
                  NAME
                </Th>
                <Th color={"#6BA6FF"} fontWeight={500} fontSize={".75rem"}>
                  COURSE
                </Th>
                <Th color={"#6BA6FF"} fontWeight={500} fontSize={".75rem"}>
                  LEVEL
                </Th>
                <Th color={"#6BA6FF"} fontWeight={500} fontSize={".75rem"}>
                  GUARDIAN CONTACT
                </Th>
                <Th color={"#6BA6FF"} fontWeight={500} fontSize={".75rem"}>
                  SCHOOL NAME
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr bg={"#F5F6F7"} color={"#003E9C"} mt={".5rem"}>
                <Td>Smith Rans</Td>
                <Td>Fundamentals of Web Development</Td>
                <Td>Beginner</Td>
                <Td>+91 8920039</Td>
                <Td>Montessori College Hilton</Td>
              </Tr>
              <Tr bg={"#F5F6F7"} color={"#003E9C"} mt={".5rem"}>
                <Td>Toms Kid</Td>
                <Td>App Development</Td>
                <Td>Intermediate</Td>
                <Td>+44345 0039</Td>
                <Td>Teeside Basic School Cardiff</Td>
              </Tr>
              <Tr bg={"#F5F6F7"} color={"#003E9C"} mt={".5rem"}>
                <Td>Tomide Williams</Td>
                <Td>UI/UX Design Fundamentals</Td>
                <Td>Advance</Td>
                <Td>+3431 89239</Td>
                <Td>Borison Jnr School Newtown</Td>
              </Tr>
              <Tr bg={"#F5F6F7"} color={"#003E9C"} mt={".5rem"}>
                <Td>Chuks Emeka</Td>
                <Td>Fundamentals of Web Development</Td>
                <Td>Intermediate</Td>
                <Td>+91 8920039</Td>
                <Td>Montessori College Hilton</Td>
              </Tr>

              <Tr bg={"#F5F6F7"} color={"#003E9C"} mt={".5rem"}>
                <Td>Chuks Emeka</Td>
                <Td>Fundamentals of Web Development</Td>
                <Td>Intermediate</Td>
                <Td>+91 8920039</Td>
                <Td>Montessori College Hilton</Td>
              </Tr>

              <Tr bg={"#F5F6F7"} color={"#003E9C"} mt={".5rem"}>
                <Td>Chuks Emeka</Td>
                <Td>Fundamentals of Web Development</Td>
                <Td>Intermediate</Td>
                <Td>+91 8920039</Td>
                <Td>Montessori College Hilton</Td>
              </Tr>

              <Tr bg={"#F5F6F7"} color={"#003E9C"} mt={".5rem"}>
                <Td>Chuks Emeka</Td>
                <Td>Fundamentals of Web Development</Td>
                <Td>Intermediate</Td>
                <Td>+91 8920039</Td>
                <Td>Montessori College Hilton</Td>
              </Tr>

              <Tr bg={"#F5F6F7"} color={"#003E9C"} mt={".5rem"}>
                <Td>Chuks Emeka</Td>
                <Td>Fundamentals of Web Development</Td>
                <Td>Intermediate</Td>
                <Td>+91 8920039</Td>
                <Td>Montessori College Hilton</Td>
              </Tr>

              <Tr bg={"#F5F6F7"} color={"#003E9C"} mt={".5rem"}>
                <Td>Chuks Emeka</Td>
                <Td>Fundamentals of Web Development</Td>
                <Td>Intermediate</Td>
                <Td>+91 8920039</Td>
                <Td>Montessori College Hilton</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

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

export default StudentsAdminPageContent;
