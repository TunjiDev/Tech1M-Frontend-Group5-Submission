import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

function QuizAssignmentPageContent() {
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
            Quiz/Assignment
          </Text>
        </Flex>

        <Flex my={"1rem"}>
          <Box
            flex={1}
            ml={"1rem"}
            mr={"2rem"}
            boxShadow={"0px 3px 4px rgba(0, 0, 0, 0.15)"}
            px={".85rem"}
            py={".75rem"}
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
              <Text color={"#0065FF"}>View More</Text>
            </Flex>
          </Box>

          <Flex
            flex={1}
            ml={"1rem"}
            direction={"column"}
            boxShadow={"0px 3px 4px rgba(0, 0, 0, 0.15)"}
            borderRadius={".5rem"}
            py={".5rem"}
            px={".5rem"}
          >
            <Box flex={0.1}>
              <Text color={"#0065FF"}>Quizes</Text>
            </Box>
            <Flex flex={0.9} justifyContent={"center"} alignItems={"center"}>
              <Text textAlign={"center"} color={"#6BA6FF"}>
                No quizes recorded yet
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default QuizAssignmentPageContent;
