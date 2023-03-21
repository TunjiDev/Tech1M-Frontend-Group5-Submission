import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbBook2 } from "react-icons/tb";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdOutlineAssignment } from "react-icons/md";
import { TbBrandWechat } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import AuthContext from "../../context-store/authContext";
import styles from "./SideBar.module.css";

function HiddenSideBar(props) {
  const authCtx = useContext(AuthContext);
  const [showCloseIcon, setShowCloseIcon] = useState(true);

  const sidebarHandler = () => {
    setShowCloseIcon(!showCloseIcon);
    props.onClick();
  };

  return (
    <Flex
      bg={"rgba(0, 0, 0, 0.9)"}
      color={"white"}
      h={"100vh"}
      w={"100%"}
      zIndex={30}
      position={"fixed"}
      top={0}
      bottom={0}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Box position={"absolute"} top={10} cursor={"pointer"} onClick={sidebarHandler}>
        <FaTimes size={30} color={"white"} />
      </Box>
      <Box>
        {(authCtx.role === "Super Admin" || authCtx.role === "Instructor") && (
          <Box mb={"1.6rem"}>
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
          <Box mb={"1.6rem"}>
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

        <Box mb={"1.6rem"}>
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
          <Box mb={"1.6rem"}>
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

        <Box mb={"1.6rem"}>
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

        <Box>
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

export default HiddenSideBar;
