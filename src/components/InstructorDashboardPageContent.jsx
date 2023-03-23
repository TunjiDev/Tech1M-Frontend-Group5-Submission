import React from "react";
import { Box, Flex, Text, Heading, Avatar, Progress, Badge, useMediaQuery } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import student1 from "../assets/images/student-progress/student1.png";
import student2 from "../assets/images/student-progress/student2.png";
import student3 from "../assets/images/student-progress/student3.png";
import student4 from "../assets/images/student-progress/student4.png";
import student5 from "../assets/images/student-progress/student5.png";
import student6 from "../assets/images/student-progress/student6.png";

function InstructorDashboardPageContent() {
  const [isHigherThan1200] = useMediaQuery("(min-height: 75rem)");

  return (
    <Box w={"full"}>
      <Box
        mt={{ base: "12rem", md: "6rem", lg: `${isHigherThan1200 ? "12rem" : "6rem"}` }}
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
          <Text fontSize={{ base: ".5rem", md: ".75rem", lg: ".75rem" }} color={"#E6F0FF"}>
            Welcome back
          </Text>
          <Heading as={"h3"} size="lg" color={"#E6F0FF"} fontSize={{ base: "1rem", md: "1.3rem", lg: "1.5rem" }}>
            Will Buyers
          </Heading>
          <Text fontSize={{ base: ".5rem", md: ".75rem", lg: ".75rem" }} color={"#FFFEFE"}>
            Your students completed 74% of the tasks.
          </Text>
        </Flex>

        <Flex pt={"1rem"} direction={{ base: "column", md: "column", lg: "row" }}>
          <Box
            flex={{ base: 1, md: 1, lg: 1.1 }}
            boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"}
            borderRadius={".5rem"}
            pt={".5rem"}
            ml={{ base: 0, md: "1rem", lg: "1rem" }}
            mb={{ base: "2rem", md: 0, lg: 0 }}
          >
            <Text
              textAlign={"start"}
              color={"#003E9C"}
              mb={"1rem"}
              ml={".5rem"}
              fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}
            >
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
              fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}
            >
              <Box mr={".5rem"}>
                <BsThreeDots color={"#0065FF"} />
              </Box>
              <Text color={"#0065FF"}>View All</Text>
            </Flex>
          </Box>

          <Box
            flex={{ base: 1, md: 1, lg: 1.1 }}
            ml={{ base: 0, md: "1rem", lg: "1rem" }}
            mb={{ base: "2rem", md: 0, lg: 0 }}
            pt={".5rem"}
          >
            <Flex
              justifyContent={"space-around"}
              boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"}
              borderRadius={".5rem"}
              py={"1rem"}
              mb={".5rem"}
              fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}
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
              fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}
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
              <Text
                textAlign={"start"}
                color={"#003E9C"}
                mb={"1rem"}
                fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}
              >
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
                fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}
              >
                <Box mr={".5rem"}>
                  <BsThreeDots color={"#0065FF"} />
                </Box>
                <Text color={"#0065FF"}>View All</Text>
              </Flex>
            </Box>
          </Box>

          <Box
            flex={{ base: 1, md: 0.8, lg: 0.8 }}
            ml={{ base: 0, md: "1rem", lg: "1rem" }}
            mr={{ base: 0, md: "2rem", lg: "3rem" }}
            boxShadow={"0px 3px 4px rgba(0, 0, 0, 0.15)"}
            px={".5rem"}
            py={".5rem"}
            borderRadius={".5rem"}
          >
            <Box py={".5rem"}>
              <Text
                textAlign={"start"}
                color={"#0065FF"}
                mb={"1rem"}
                fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}
              >
                Assignments
              </Text>
              <Text textAlign={"start"} color={"#2B7FFF"} fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}>
                Redesign your favorite Application
              </Text>
              <Text
                color={"#0047B3"}
                textAlign={"start"}
                fontSize={{ base: ".5rem", md: ".75rem", lg: ".75rem" }}
                fontWeight={500}
              >
                submissions
              </Text>
              <Text textAlign={"start"} color={"#0047B3"} fontSize={{ base: "1rem", md: "1.25rem", lg: "1.25rem" }}>
                200
              </Text>
            </Box>

            <Box py={".5rem"}>
              <Text textAlign={"start"} color={"#2B7FFF"} fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}>
                Wireframe your favorite Application
              </Text>
              <Text
                color={"#0047B3"}
                textAlign={"start"}
                fontSize={{ base: ".5rem", md: ".75rem", lg: ".75rem" }}
                fontWeight={500}
              >
                submissions
              </Text>
              <Text textAlign={"start"} color={"#0047B3"} fontSize={{ base: "1rem", md: "1.25rem", lg: "1.25rem" }}>
                300
              </Text>
            </Box>

            <Box py={".5rem"}>
              <Text textAlign={"start"} color={"#2B7FFF"} fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}>
                Do a research on design thinking
              </Text>
              <Text
                color={"#0047B3"}
                textAlign={"start"}
                fontSize={{ base: ".5rem", md: ".75rem", lg: ".75rem" }}
                fontWeight={500}
              >
                submissions
              </Text>
              <Text textAlign={"start"} color={"#0047B3"} fontSize={{ base: "1rem", md: "1.25rem", lg: "1.25rem" }}>
                1700
              </Text>
            </Box>

            <Box py={".5rem"} mb={".5rem"}>
              <Text textAlign={"start"} color={"#2B7FFF"} fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}>
                Read up on ideation
              </Text>
              <Text
                color={"#0047B3"}
                textAlign={"start"}
                fontSize={{ base: ".5rem", md: ".75rem", lg: ".75rem" }}
                fontWeight={500}
              >
                submissions
              </Text>
              <Text textAlign={"start"} color={"#0047B3"} fontSize={{ base: "1rem", md: "1.25rem", lg: "1.25rem" }}>
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
              fontSize={{ base: "0.875rem", md: "1rem", lg: "1rem" }}
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
