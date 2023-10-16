import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbBook2 } from "react-icons/tb";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdOutlineAssignment } from "react-icons/md";
import { TbBrandWechat } from "react-icons/tb";
import AuthContext from "../../context-store/authContext";
import styles from "./SideBar.module.css";

function SideBar() {
  const authCtx = useContext(AuthContext);
  const [isHeightThan1200] = useMediaQuery("(min-height: 62.5rem)");

  return (
    <Flex
      bg={"#E6F0FF"}
      minH={"full"}
      w={"full"}
      zIndex={-1}
      pt={{ base: "12rem", md: "7rem", lg: `${isHeightThan1200 ? "10rem" : "7rem"}` }}
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
    >
      <Box>
        {(authCtx.role === "Super Admin" || authCtx.role === "Instructor") && (
          <Box pl={"2rem"} mb={"1.6rem"}>
            <NavLink
              className={(navData) =>
                navData.isActive ? `${styles.active} ${styles.navbar__active__link}` : `${styles.navbar__link}`
              }
              to={`${authCtx.role === "Super Admin" ? "/dashboard-admin" : "/dashboard-instructor"}`}
            >
              <Box>
                <RxDashboard size={20} />
              </Box>
              <Text ml={".5rem"}>Dashboard</Text>
            </NavLink>
          </Box>
        )}

        {authCtx.role === "Super Admin" && (
          <Box pl={"2rem"} mb={"1.6rem"}>
            <NavLink
              className={(navData) =>
                navData.isActive ? `${styles.active} ${styles.navbar__active__link}` : `${styles.navbar__link}`
              }
              to="/courses"
            >
              <Box>
                <TbBook2 size={20} />
              </Box>
              <Text ml={".5rem"}>Courses</Text>
            </NavLink>
          </Box>
        )}

        <Box pl={"2rem"} mb={"1.6rem"}>
          <NavLink
            className={(navData) =>
              navData.isActive ? `${styles.active} ${styles.navbar__active__link}` : `${styles.navbar__link}`
            }
            to={`${authCtx.role === "Instructor" ? "/students-instructor" : "/students-admin"}`}
          >
            <Box>
              <SlGraduation size={20} />
            </Box>
            <Text ml={".5rem"}>Students</Text>
          </NavLink>
        </Box>

        {authCtx.role === "Super Admin" && (
          <Box pl={"2rem"} mb={"1.6rem"}>
            <NavLink
              className={(navData) =>
                navData.isActive ? `${styles.active} ${styles.navbar__active__link}` : `${styles.navbar__link}`
              }
              to="/payments"
            >
              <Box>
                <HiOutlineCurrencyDollar size={20} />
              </Box>
              <Text ml={".5rem"}>Payments</Text>
            </NavLink>
          </Box>
        )}

        <Box pl={"2rem"} mb={"1.6rem"}>
          <NavLink
            className={(navData) =>
              navData.isActive ? `${styles.active} ${styles.navbar__active__link}` : `${styles.navbar__link}`
            }
            to="/quiz-assignment"
          >
            <Box>
              <MdOutlineAssignment size={20} />
            </Box>
            <Flex ml={".5rem"} direction={"column"}>
              <Box>Quiz/</Box>
              <Box>Assignment</Box>
            </Flex>
          </NavLink>
        </Box>

        <Box pl={"2rem"}>
          <NavLink
            className={(navData) =>
              navData.isActive ? `${styles.active} ${styles.navbar__active__link}` : `${styles.navbar__link}`
            }
            to="/messages"
          >
            <Box>
              <TbBrandWechat size={20} />
            </Box>
            <Text ml={".5rem"}>Messages</Text>
          </NavLink>
        </Box>
      </Box>
    </Flex>
  );
}

export default SideBar;
