import React from "react";
import { Box, Flex, Text, Heading, Avatar, Progress, AvatarGroup, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Calendar from "./Calendar";
import student1 from "../assets/images/student-progress/student1.png";
import student2 from "../assets/images/student-progress/student2.png";
import student3 from "../assets/images/student-progress/student3.png";
import student4 from "../assets/images/student-progress/student4.png";
import student5 from "../assets/images/student-progress/student5.png";
import student6 from "../assets/images/student-progress/student6.png";
import lesson1 from "../assets/images/upcoming-lessons/lesson1.png";
import lesson2 from "../assets/images/upcoming-lessons/lesson2.png";
import lesson3 from "../assets/images/upcoming-lessons/lesson3.png";
import lesson4 from "../assets/images/upcoming-lessons/lesson4.png";
import lesson5 from "../assets/images/upcoming-lessons/lesson5.png";

const data = [
  { day: "02/01", number: 10 },
  { day: "03/01", number: 20 },
  { day: "04/01", number: 30 },
  { day: "05/01", number: 25 },
  { day: "06/01", number: 15 },
  { day: "07/01", number: 10 },
  { day: "08/01", number: 20 },
];

function AdminDashboardPageContent() {
  const [isWidthLowerThan400] = useMediaQuery("(max-width: 30rem)");
  const [isHeightThan1200] = useMediaQuery("(min-height: 62.5rem)");
  const navigate = useNavigate();

  return (
    <Box w={"full"}>
      <Box
        mt={{ base: "12rem", md: "6rem", lg: `${isHeightThan1200 ? "8rem" : "6rem"}` }}
        px={{ base: ".2rem", md: "1rem", lg: "1rem" }}
        pb={"2rem"}
        w={{ base: "90%", md: "100%", lg: "100%" }}
        mx={"auto"}
      >
        <Flex
          bg={"#0065FF"}
          direction={"column"}
          py={{ base: ".5rem", md: "1rem", lg: "1rem" }}
          pl={{ base: ".5rem", md: "1rem", lg: "1rem" }}
          alignItems={"flex-start"}
          borderRadius={"0.5rem"}
          boxShadow={"0px 3px 4px rgba(0, 0, 0, 0.15)"}
        >
          <Text fontSize={".75rem"} color={"#E6F0FF"}>
            Welcome back
          </Text>
          <Heading as={"h3"} size="lg" fontSize={{ base: "1rem", md: "1.3rem", lg: "1.5rem" }} color={"#E6F0FF"}>
            Adams Chuks
          </Heading>
          <Text fontSize={".75rem"} color={"#FFFEFE"}>
            Your students completed 74% of the tasks.
          </Text>
        </Flex>

        <Flex pt={"1rem"} direction={{ base: "column", md: "column", lg: "row" }}>
          <Box
            flex={{ base: 1, md: 1, lg: 1.1 }}
            boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"}
            borderRadius={".5rem"}
            pt={".5rem"}
            mb={{ base: "2rem", md: "2rem", lg: 0 }}
          >
            <Text textAlign={"start"} color={"#003E9C"} mb={"1rem"} ml={".5rem"}>
              Student's Progress
            </Text>
            <Flex mx={".5rem"} mb={".5rem"}>
              <Box flex={1}>
                <Avatar name="Smith Blacks" src={student1} />
              </Box>
              <Box flex={4}>
                <Flex justifyContent={"space-between"} mb={".5rem"}>
                  <Text color={"#6BA6FF"}>Smith Blacks</Text>
                  <Text color={"#6BA6FF"}>36%</Text>
                </Flex>
                <Box>
                  <Progress value={36} size={"xs"} colorScheme={"gray"} />
                </Box>
              </Box>
            </Flex>

            <Flex mx={".5rem"} mb={".5rem"}>
              <Box flex={1}>
                <Avatar name="Adeola Bats" src={student2} />
              </Box>
              <Box flex={4}>
                <Flex justifyContent={"space-between"} mb={".5rem"}>
                  <Text color={"#6BA6FF"}>Adeola Bats</Text>
                  <Text color={"#6BA6FF"}>65%</Text>
                </Flex>
                <Box>
                  <Progress value={65} size={"xs"} colorScheme={"gray"} />
                </Box>
              </Box>
            </Flex>

            <Flex mx={".5rem"} mb={".5rem"}>
              <Box flex={1}>
                <Avatar name="Ying Toms" src={student3} />
              </Box>
              <Box flex={4}>
                <Flex justifyContent={"space-between"} mb={".5rem"}>
                  <Text color={"#6BA6FF"}>Ying Toms</Text>
                  <Text color={"#6BA6FF"}>24%</Text>
                </Flex>
                <Box>
                  <Progress value={24} size={"xs"} colorScheme={"gray"} />
                </Box>
              </Box>
            </Flex>

            <Flex mx={".5rem"} mb={".5rem"}>
              <Box flex={1}>
                <Avatar name="Tailor Hing" src={student4} />
              </Box>
              <Box flex={4}>
                <Flex justifyContent={"space-between"} mb={".5rem"}>
                  <Text color={"#6BA6FF"}>Tailor Hing</Text>
                  <Text color={"#6BA6FF"}>72%</Text>
                </Flex>
                <Box>
                  <Progress value={72} size={"xs"} colorScheme={"gray"} />
                </Box>
              </Box>
            </Flex>

            <Flex mx={".5rem"} mb={".5rem"}>
              <Box flex={1}>
                <Avatar name="Smith Blacks" src={student5} />
              </Box>
              <Box flex={4}>
                <Flex justifyContent={"space-between"} mb={".5rem"}>
                  <Text color={"#6BA6FF"}>Smith Blacks</Text>
                  <Text color={"#6BA6FF"}>45%</Text>
                </Flex>
                <Box>
                  <Progress value={45} size={"xs"} colorScheme={"gray"} />
                </Box>
              </Box>
            </Flex>

            <Flex mx={".5rem"} mb={".5rem"}>
              <Box flex={1}>
                <Avatar name="Smith Blacks" src={student6} />
              </Box>
              <Box flex={4}>
                <Flex justifyContent={"space-between"} mb={".5rem"}>
                  <Text color={"#6BA6FF"}>Smith Blacks</Text>
                  <Text color={"#6BA6FF"}>16%</Text>
                </Flex>
                <Box>
                  <Progress value={16} size={"xs"} colorScheme={"gray"} />
                </Box>
              </Box>
            </Flex>

            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              border={"1px solid #0065FF"}
              borderRadius={".5rem"}
              py={".5rem"}
              w={"90%"}
              m={"0 auto"}
              cursor={"pointer"}
            >
              <Box mr={".5rem"}>
                <BsThreeDots color={"#0065FF"} />
              </Box>
              <Text color={"#0065FF"}>View All</Text>
            </Flex>
          </Box>

          <Box
            flex={{ base: 1, md: 1, lg: 1.1 }}
            ml={{ base: 0, md: 0, lg: "1rem" }}
            pt={".5rem"}
            mb={{ base: "3rem", md: "3rem", lg: 0 }}
          >
            <Flex
              justifyContent={"space-around"}
              boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"}
              borderRadius={".5rem"}
              py={"1rem"}
              mb={".5rem"}
            >
              <Box>
                <Text textAlign={"start"} color={"#01A830"}>
                  Total Courses
                </Text>
                <Text textAlign={"start"} color={"#003E9C"} fontWeight={500}>
                  215
                </Text>
              </Box>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                border={"1px solid #0065FF"}
                borderRadius={".5rem"}
                py={".3rem"}
                w={"40%"}
                cursor={"pointer"}
                onClick={() => navigate("/courses")}
              >
                <Box mr={".5rem"}>
                  <BsThreeDots color={"#0065FF"} />
                </Box>
                <Text color={"#0065FF"}>View All</Text>
              </Flex>
            </Flex>

            <Flex
              justifyContent={"space-around"}
              boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"}
              borderRadius={".5rem"}
              py={"1rem"}
              mb={".5rem"}
            >
              <Box>
                <Text textAlign={"start"} color={"#0065FF"}>
                  Total Students
                </Text>
                <Text textAlign={"start"} color={"#003E9C"} fontWeight={500}>
                  1,759
                </Text>
              </Box>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                border={"1px solid #0065FF"}
                borderRadius={".5rem"}
                py={".3rem"}
                w={"40%"}
                cursor={"pointer"}
                onClick={() => navigate("/students-admin")}
              >
                <Box mr={".5rem"}>
                  <BsThreeDots color={"#0065FF"} />
                </Box>
                <Text color={"#0065FF"}>View All</Text>
              </Flex>
            </Flex>

            <Flex
              justifyContent={"space-around"}
              boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"}
              borderRadius={".5rem"}
              py={"1rem"}
              mb={".5rem"}
            >
              <Box>
                <Text textAlign={"start"} color={"#0065FF"}>
                  Total Lessons
                </Text>
                <Text textAlign={"start"} color={"#003E9C"} fontWeight={500}>
                  800
                </Text>
              </Box>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                border={"1px solid #0065FF"}
                borderRadius={".5rem"}
                py={".3rem"}
                w={"40%"}
                cursor={"pointer"}
                onClick={() => navigate("/courses")}
              >
                <Box mr={".5rem"}>
                  <BsThreeDots color={"#0065FF"} />
                </Box>
                <Text color={"#0065FF"}>View All</Text>
              </Flex>
            </Flex>

            <Box bg={"#F5F6F7"} py={"1rem"} px={"1rem"} borderRadius={".5rem"}>
              <Text textAlign={"start"} color={"#003E9C"} mb={"1rem"}>
                Work Stats
              </Text>

              <Flex justifyContent={"space-between"}>
                <Box mr={"1.5rem"}>
                  <Flex flexWrap={"wrap"} justifyContent={"flex-start"} textAlign={"start"} color={"#7A8699"}>
                    Lesson Discuss
                  </Flex>
                  <Text textAlign={"start"} color={"#96C0FF"} fontSize={".75rem"} fontWeight={500}>
                    3.4hrs
                  </Text>
                </Box>
                <Box mr={"1.5rem"}>
                  <Flex flexWrap={"wrap"} justifyContent={"flex-start"} textAlign={"start"} color={"#7A8699"}>
                    Taking Class
                  </Flex>
                  <Text textAlign={"start"} color={"#96C0FF"} fontSize={".75rem"} fontWeight={500}>
                    4.5hrs
                  </Text>
                </Box>
                <Box>
                  <Flex flexWrap={"wrap"} justifyContent={"flex-start"} textAlign={"start"} color={"#7A8699"}>
                    Work in Progress
                  </Flex>
                  <Text textAlign={"start"} color={"#96C0FF"} fontSize={".75rem"} fontWeight={500}>
                    918 +23.45%
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box
            flex={{ base: 1, md: 1, lg: 0.8 }}
            ml={{ base: 0, md: 0, lg: "1rem" }}
            mr={{ base: 0, md: 0, lg: "3rem" }}
            mb={{ base: "2rem", md: "2rem", lg: 0 }}
          >
            <Text textAlign={"start"} color={"#003E9C"}>
              Upcoming Lessons
            </Text>
            <Box bg={"#F5F6F7"} py={".5rem"} pl={"1rem"} borderRadius={".5rem"} mb={".5rem"}>
              <Text textAlign={"start"} color={"#2B7FFF"}>
                UI/UX Design Thinking
              </Text>
              <Text color={"#2B7FFF"} textAlign={"start"} fontSize={".75rem"} fontWeight={500}>
                12:30am - 1:15pm
              </Text>
              <Box>
                <AvatarGroup size="sm" spacing={-5}>
                  <Avatar name="lesson 5" src={lesson5} />
                  <Avatar name="lesson 4" src={lesson4} />
                  <Avatar name="lesson 3" src={lesson3} />
                  <Avatar name="lesson 2" src={lesson2} />
                  <Avatar name="lesson 1" src={lesson1} />
                </AvatarGroup>
              </Box>
            </Box>

            <Box bg={"#F5F6F7"} py={".5rem"} pl={"1rem"} borderRadius={".5rem"} mb={".5rem"}>
              <Text textAlign={"start"} color={"#2B7FFF"}>
                UI Motion Fundamentals
              </Text>
              <Text color={"#2B7FFF"} textAlign={"start"} fontSize={".75rem"} fontWeight={500}>
                1:35pm - 2:15pm
              </Text>
              <Box>
                <AvatarGroup size="sm" spacing={-5}>
                  <Avatar name="lesson 5" src={lesson5} />
                  <Avatar name="lesson 4" src={lesson4} />
                  <Avatar name="lesson 3" src={lesson3} />
                  <Avatar name="lesson 2" src={lesson2} />
                  <Avatar name="lesson 1" src={lesson1} />
                </AvatarGroup>
              </Box>
            </Box>

            <Box bg={"#F5F6F7"} py={".5rem"} pl={"1rem"} borderRadius={".5rem"} mb={".5rem"}>
              <Text textAlign={"start"} color={"#2B7FFF"}>
                Web Development Fundamentals
              </Text>
              <Text color={"#2B7FFF"} textAlign={"start"} fontSize={".75rem"} fontWeight={500}>
                2:30pm - 2:45pm
              </Text>
              <Box>
                <AvatarGroup size="sm" spacing={-5}>
                  <Avatar name="lesson 5" src={lesson5} />
                  <Avatar name="lesson 4" src={lesson4} />
                  <Avatar name="lesson 3" src={lesson3} />
                  <Avatar name="lesson 2" src={lesson2} />
                  <Avatar name="lesson 1" src={lesson1} />
                </AvatarGroup>
              </Box>
            </Box>

            <Box bg={"#F5F6F7"} py={".5rem"} pl={"1rem"} borderRadius={".5rem"} mb={".5rem"}>
              <Text textAlign={"start"} color={"#2B7FFF"}>
                User Research Methodologies
              </Text>
              <Text color={"#2B7FFF"} textAlign={"start"} fontSize={".75rem"} fontWeight={500}>
                4:30pm - 4:15pm
              </Text>
              <Box>
                <AvatarGroup size="sm" spacing={-5}>
                  <Avatar name="lesson 5" src={lesson5} />
                  <Avatar name="lesson 4" src={lesson4} />
                  <Avatar name="lesson 3" src={lesson3} />
                  <Avatar name="lesson 2" src={lesson2} />
                  <Avatar name="lesson 1" src={lesson1} />
                </AvatarGroup>
              </Box>
            </Box>
          </Box>
        </Flex>

        <Flex direction={{ base: "column", md: "column", lg: "row" }} alignItems={"center"}>
          <Flex mt={"2rem"} flex={{ base: 1, md: 1, lg: 2 }} justifyContent={"center"}>
            <BarChart width={isWidthLowerThan400 ? 300 : 600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="number" fill="#0065ff" barSize={20} />
            </BarChart>
          </Flex>
          <Box mt={"2rem"} flex={1}>
            <Calendar />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default AdminDashboardPageContent;
