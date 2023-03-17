import React from "react";
import { Box, Flex, Text, Avatar, Progress } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import student1 from "../assets/images/student-progress/student1.png";
import student2 from "../assets/images/student-progress/student2.png";
import student3 from "../assets/images/student-progress/student3.png";
import student4 from "../assets/images/student-progress/student4.png";
import student5 from "../assets/images/student-progress/student5.png";
import student6 from "../assets/images/student-progress/student6.png";
import student1b from "../assets/images/student-progress/student1b.png";

function StudentsInstructorPageContent() {
  return (
    <Box w={"full"}>
      <Box mt={"6rem"} px={"1rem"} mb={"2rem"}>
        <Flex
          bg={"#0065FF"}
          direction={"column"}
          py={"2rem"}
          pl={"1rem"}
          alignItems={"flex-start"}
          borderRadius={"0.5rem"}
          boxShadow={"0px 3px 4px rgba(0, 0, 0, 0.15)"}
        >
          <Text color={"#E6F0FF"} fontWeight={500} fontSize={"1.5rem"}>
            Students
          </Text>
        </Flex>

        <Box
          w={"30%"}
          boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"}
          py={"1.5rem"}
          px={"1rem"}
          borderRadius={".5rem"}
          mb={"2rem"}
        >
          <Text textAlign={"start"} color={"#0065FF"}>
            Total Students
          </Text>
          <Text textAlign={"start"} color={"#003E9C"} fontWeight={500}>
            1,759
          </Text>
        </Box>

        <Flex>
          <Box
            flex={0.8}
            boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"}
            borderRadius={".5rem"}
            pt={".5rem"}
            pb={"1rem"}
            mr={"2rem"}
          >
            <Text textAlign={"start"} color={"#003E9C"} mb={"1rem"} ml={".5rem"}>
              Student's Progress
            </Text>
            <Flex mx={".5rem"} mb={".5rem"} bg={"#E6F0FF"} borderRadius={"0.688rem"}>
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
              w={"100%"}
              cursor={"pointer"}
              mt={"1rem"}
            >
              <Box mr={".5rem"}>
                <BsThreeDots color={"#0065FF"} />
              </Box>
              <Text color={"#0065FF"}>View More</Text>
            </Flex>
          </Box>
          <Flex
            flex={0.2}
            bg={"#E6F0FF"}
            mr={"2rem"}
            boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.15)"}
            borderRadius={".5rem"}
            alignItems={"center"}
            direction={"column"}
            py={"1rem"}
            px={"1rem"}
          >
            <Box>
              <Avatar name="Smith Blacks" src={student1b} size="2xl" />
            </Box>

            <Text textAlign={"center"} fontSize={"0.875rem"} color={"#0065FF"} mt={".5rem"}>
              Smith Blacks
            </Text>

            <Box mt={".5rem"}>
              <Text textAlign={"center"} fontSize={"0.875rem"} color={"#0065FF"}>
                Course:
              </Text>
              <Text textAlign={"center"} fontSize={"0.875rem"} color={"#0065FF"}>
                Product Design
              </Text>
            </Box>

            <Box mt={".5rem"}>
              <Text textAlign={"center"} fontSize={"0.875rem"} color={"#0065FF"}>
                Progress:
              </Text>
              <Text textAlign={"center"} fontSize={"0.875rem"} color={"#0065FF"}>
                36%
              </Text>
            </Box>

            <Box mt={".5rem"}>
              <Text textAlign={"center"} fontSize={"0.875rem"} color={"#0065FF"}>
                Started:
              </Text>
              <Text textAlign={"center"} fontSize={"0.875rem"} color={"#0065FF"}>
                About a month ago
              </Text>
            </Box>

            <Box mt={".5rem"}>
              <Text textAlign={"center"} fontSize={"0.875rem"} color={"#0065FF"}>
                Payment Status:
              </Text>
              <Text textAlign={"center"} fontSize={"0.875rem"} color={"#0065FF"}>
                Completed
              </Text>
            </Box>

            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              border={"1px solid #0065FF"}
              borderRadius={".5rem"}
              py={".5rem"}
              w={"100%"}
              cursor={"pointer"}
              mt={"1rem"}
            >
              <Box mr={".5rem"}>
                <BsThreeDots color={"#0065FF"} />
              </Box>
              <Text color={"#0065FF"}>Message</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default StudentsInstructorPageContent;
