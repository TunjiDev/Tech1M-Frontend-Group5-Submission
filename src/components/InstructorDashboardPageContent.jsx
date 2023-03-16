import React from "react";
import { Box, Flex, Text, Heading, Avatar, Progress, Badge } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import student1 from "../assets/images/student-progress/student1.png";
import student2 from "../assets/images/student-progress/student2.png";
import student3 from "../assets/images/student-progress/student3.png";
import student4 from "../assets/images/student-progress/student4.png";
import student5 from "../assets/images/student-progress/student5.png";
import student6 from "../assets/images/student-progress/student6.png";

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
            Will Buyers
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
                  <Text color={"#6BA6FF"} fontSize={".75rem"}>
                    Smith Blacks
                  </Text>
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
                  <Text color={"#6BA6FF"} fontSize={".75rem"}>
                    Adeola Bats
                  </Text>
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
                  <Text color={"#6BA6FF"} fontSize={".75rem"}>
                    Ying Toms
                  </Text>
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
                  <Text color={"#6BA6FF"} fontSize={".75rem"}>
                    Tailor Hing
                  </Text>
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
                  <Text color={"#6BA6FF"} fontSize={".75rem"}>
                    Smith Blacks
                  </Text>
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
                  <Text color={"#6BA6FF"} fontSize={".75rem"}>
                    Smith Blacks
                  </Text>
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

            <Box py={"1rem"} px={"1rem"} borderRadius={".5rem"} boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"}>
              <Text textAlign={"start"} color={"#003E9C"} mb={"1rem"}>
                Messages
              </Text>

              <Box mb={"1rem"}>
                <Flex justifyContent={"flex-start"} alignItems={"center"}>
                  <Box mr={".5rem"}>
                    <Avatar name="Smith Blacks" src={student1} />
                  </Box>
                  <Box>
                    <Text color={"#6BA6FF"} mb={".5rem"} fontSize={".75rem"}>
                      Smith Blacks
                    </Text>
                    <Box mr={"1rem"} position="relative">
                      <CiBellOn color={"#96C0FF"} size={25} />
                      <Badge
                        position={"absolute"}
                        top={-1.5}
                        right={12}
                        bg={"#FA0724"}
                        color={"#FFFEFE"}
                        fontWeight={500}
                        fontSize={"xs"}
                        borderRadius={"50%"}
                      >
                        3
                      </Badge>
                    </Box>
                  </Box>
                </Flex>
              </Box>

              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                border={"1px solid #0065FF"}
                borderRadius={".5rem"}
                py={".5rem"}
                cursor={"pointer"}
              >
                <Box mr={".5rem"}>
                  <BsThreeDots color={"#0065FF"} />
                </Box>
                <Text color={"#0065FF"}>View All</Text>
              </Flex>
            </Box>
          </Box>

          <Box
            flex={0.8}
            ml={"1rem"}
            mr={"3rem"}
            boxShadow={"0px 3px 4px rgba(0, 0, 0, 0.15)"}
            px={".5rem"}
            py={".5rem"}
            borderRadius={".5rem"}
          >
            <Box py={".5rem"}>
              <Text textAlign={"start"} color={"#0065FF"} mb={"1rem"}>
                Assignments
              </Text>
              <Text textAlign={"start"} color={"#2B7FFF"}>
                Redesign your favorite Application
              </Text>
              <Text color={"#0047B3"} textAlign={"start"} fontSize={".75rem"} fontWeight={500}>
                submissions
              </Text>
              <Text textAlign={"start"} color={"#0047B3"} fontSize={"1.25rem"}>
                200
              </Text>
            </Box>

            <Box py={".5rem"}>
              <Text textAlign={"start"} color={"#2B7FFF"}>
                Wireframe your favorite Application
              </Text>
              <Text color={"#0047B3"} textAlign={"start"} fontSize={".75rem"} fontWeight={500}>
                submissions
              </Text>
              <Text textAlign={"start"} color={"#0047B3"} fontSize={"1.25rem"}>
                300
              </Text>
            </Box>

            <Box py={".5rem"}>
              <Text textAlign={"start"} color={"#2B7FFF"}>
                Do a research on design thinking
              </Text>
              <Text color={"#0047B3"} textAlign={"start"} fontSize={".75rem"} fontWeight={500}>
                submissions
              </Text>
              <Text textAlign={"start"} color={"#0047B3"} fontSize={"1.25rem"}>
                1700
              </Text>
            </Box>

            <Box py={".5rem"} mb={".5rem"}>
              <Text textAlign={"start"} color={"#2B7FFF"}>
                Read up on ideation
              </Text>
              <Text color={"#0047B3"} textAlign={"start"} fontSize={".75rem"} fontWeight={500}>
                submissions
              </Text>
              <Text textAlign={"start"} color={"#0047B3"} fontSize={"1.25rem"}>
                1750
              </Text>
            </Box>

            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              border={"1px solid #0065FF"}
              borderRadius={".5rem"}
              py={".5rem"}
              cursor={"pointer"}
            >
              <Box mr={".5rem"}>
                <BsThreeDots color={"#0065FF"} />
              </Box>
              <Text color={"#0065FF"}>View All</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default InstructorDashboardPageContent;
