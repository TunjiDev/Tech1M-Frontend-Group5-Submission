import React from "react";
import { Box, Flex, Text, Heading, Avatar, Progress } from "@chakra-ui/react";
import student1 from "../assets/images/student-progress/student1.png";
import student2 from "../assets/images/student-progress/student2.png";
import student3 from "../assets/images/student-progress/student3.png";
import student4 from "../assets/images/student-progress/student4.png";
import student5 from "../assets/images/student-progress/student5.png";
import student6 from "../assets/images/student-progress/student6.png";

function DashboardPageContent() {
  return (
    <Box
      textAlign={"center"}
      // background={"green"}
      // color={"white"}
      minWidth={"85vw"}
      height={"100vh"}
      position={"absolute"}
      right={0}
    >
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

        <Flex pt={"1rem"}>
          <Box flex={1} boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"} borderRadius={".5rem"} pt={".5rem"}>
            <Text textAlign={"start"} color={"#003E9C"} mb={"1rem"} ml={".5rem"}>
              Student's Progress
            </Text>
            <Flex mx={"1rem"} mb={".5rem"}>
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

            <Flex mx={"1rem"} mb={".5rem"}>
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

            <Flex mx={"1rem"} mb={".5rem"}>
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

            <Flex mx={"1rem"} mb={".5rem"}>
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

            <Flex mx={"1rem"} mb={".5rem"}>
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

            <Flex mx={"1rem"} mb={".5rem"}>
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
          </Box>
          <Box flex={1} h={"5rem"} bg={"blue"}></Box>
          <Box flex={1} h={"5rem"} bg={"yellow"}></Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default DashboardPageContent;
