import React, { useContext } from "react";
import { Box, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context-store/authContext";
import styles from "./CoursesPageContent.module.css";
import uparrow from "../assets/icons/uparrow.png";
import downarrow from "../assets/icons/downarrow.png";
import leftarrow from "../assets/icons/leftarrow.png";
import rightarrow from "../assets/icons/rightarrow.png";
import course1 from "../assets/images/courses/course1.png";
import course2 from "../assets/images/courses/course2.png";
import course3 from "../assets/images/courses/course3.png";
import course4 from "../assets/images/courses/course4.jpg";
import course5 from "../assets/images/courses/course5.jpg";
import course6 from "../assets/images/courses/course6.jpg";
import { PaymentIconComponent } from "../assets/icons/PaymentIcon";

function CoursesPageContent() {
  const authCtx = useContext(AuthContext);
  const [nextPage, setNextPage] = React.useState(false);
  const [prevPage, setPrevPage] = React.useState(true);

  const nextPageHandler = () => {
    setNextPage(true);
    setPrevPage(false);
  };

  const prevPageHandler = () => {
    setPrevPage(true);
    setNextPage(false);
  };

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
              to="/courses"
            >
              Courses
            </NavLink>
          </Box>

          <Flex bg={"#FAFBFB"} py={".5rem"} pl={".5rem"} pr={".5rem"}>
            <Flex cursor={"pointer"} fontSize={"0.75rem"} fontWeight={500} alignItems={"center"} mr={".5rem"}>
              <Text mr={".5rem"} color={"#0065FF"}>
                COURSE
              </Text>
              <Box>
                <Image src={uparrow} />
                <Image src={downarrow} />
              </Box>
            </Flex>

            <Flex cursor={"pointer"} fontSize={"0.75rem"} fontWeight={500} alignItems={"center"} mr={".5rem"}>
              <Text mr={".5rem"} color={"#C2C7D0"}>
                LEVEL
              </Text>
              <Box>
                <Image src={uparrow} alt={"uparrow"} />
                <Image src={downarrow} alt={"downarrow"} />
              </Box>
            </Flex>

            <Flex cursor={"pointer"} fontSize={"0.75rem"} fontWeight={500} alignItems={"center"} mr={".5rem"}>
              <Text mr={".5rem"} color={"#C2C7D0"}>
                DURATION
              </Text>
              <Box>
                <Image src={uparrow} />
                <Image src={downarrow} />
              </Box>
            </Flex>

            <Flex cursor={"pointer"} fontSize={"0.75rem"} fontWeight={500} alignItems={"center"}>
              <Text mr={".5rem"} color={"#C2C7D0"}>
                ALL
              </Text>
              <Box>
                <Image src={uparrow} />
                <Image src={downarrow} />
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} minChildWidth={"17.75rem"} spacing="20px">
          {/* PAGE 1 */}
          {prevPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image src={course3} alt="User Experience Design: Figma UI/UX Design" w={"full"} />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  User Experience Design: Figma UI/UX Design
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}

          {prevPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image src={course2} alt="Web Development Fundamentals" w={"full"} />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  Web Development Fundamentals
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}

          {prevPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image src={course1} alt="App Development Fundamentals" w={"full"} />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  App Development Fundamentals
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}

          {prevPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image src={course2} alt="Web Development Fundamentals" w={"full"} />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  Web Development Fundamentals
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}

          {prevPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image src={course1} alt="App Development Fundamentals" w={"full"} />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  App Development Fundamentals
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}

          {prevPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image src={course3} alt="User Experience Design: Figma UI/UX Design" w={"full"} />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  User Experience Design: Figma UI/UX Design
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}

          {/* PAGE 2 */}
          {nextPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image w={"full"} h={"152px"} src={course4} alt="DevOps Engineering" />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  DevOps Engineering
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}

          {nextPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image w={"full"} h={"152px"} src={course5} alt="Software Quality Assurance" />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  Software Quality Assurance
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}

          {nextPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image w={"full"} h={"152px"} src={course6} alt="Digital Marketing" />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  Digital Marketing
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}

          {nextPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image src={course2} alt="Web Development Fundamentals" w={"full"} />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  Web Development Fundamentals
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}

          {nextPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image w={"full"} h={"152px"} src={course6} alt="Digital Marketing" />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  Digital Marketing
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}

          {nextPage && (
            <Box height="20rem" border={"1px solid #A6AEBB"} borderRadius={".25rem"}>
              <Box>
                <Image w={"full"} h={"152px"} src={course5} alt="Software Quality Assurance" />
              </Box>
              <Box pt={".5rem"} pb={"1rem"} px={"1rem"}>
                <Text color={"#003E9C"} mb={".5rem"}>
                  Software Quality Assurance
                </Text>
                <Text color={"#8993A4"} fontWeight={500} fontSize={".75rem"} mb={"1rem"}>
                  Created: January 2023 - 5:30am
                </Text>
                <Flex justifyContent={"space-between"} mb={"1rem"}>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent /> $1050
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />
                    Beginner
                  </Text>
                  <Text fontWeight={500} fontSize={".75rem"} color={"#96C0FF"}>
                    <PaymentIconComponent />6 weeks
                  </Text>
                </Flex>
                <Text fontWeight={500} fontSize={".75rem"} color={"#A6AEBB"}>
                  42 Modules
                </Text>
              </Box>
            </Box>
          )}
        </SimpleGrid>

        <Flex mt={"2rem"} color={"#96C0FF"} justifyContent={"center"} alignItems={"center"}>
          <Text onClick={prevPageHandler} cursor={"pointer"}>
            <Image src={leftarrow} />
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
            <Image src={rightarrow} />
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default CoursesPageContent;
