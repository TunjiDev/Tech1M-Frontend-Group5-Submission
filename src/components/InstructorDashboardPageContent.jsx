import React from "react";
import { Box, Flex, Text, Heading, Avatar, Progress, AvatarGroup } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
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

function InstructorDashboardPageContent() {
  return (
    <Box textAlign={"center"} minWidth={"85vw"} height={"100vh"} position={"absolute"} right={0}>
      <Box mt={"6rem"} px={"1rem"}>
        <Flex
          bg={"#0065FF"}
          direction={"column"}
          py={"1rem"}
          pl={"1rem"}
          alignItems={"flex-start"}
          borderRadius={"0.5rem"}
          boxShadow={"0px 3px 4px rgba(0, 0, 0, 0.15)"}
        >
          <Text fontSize={"0.75rem"} color={"#E6F0FF"}>
            Welcome back
          </Text>
          <Heading as={"h3"} size="lg" color={"#E6F0FF"}>
            Adams Chuks
          </Heading>
          <Text fontSize={"0.75rem"} color={"#FFFEFE"}>
            Your students completed 74% of the tasks.
          </Text>
        </Flex>

        <Flex pt={"1rem"} flexWrap={"wrap"}>
          <Box flex={1.1} boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"} borderRadius={".5rem"} pt={".5rem"}>
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

          <Box flex={1.1} ml={"1rem"} pt={".5rem"}>
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

          <Box flex={0.8} ml={"1rem"} mr={"3rem"}>
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
      </Box>
    </Box>
  );
}

export default InstructorDashboardPageContent;
