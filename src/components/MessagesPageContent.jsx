import React from "react";
import {
  Box,
  Flex,
  Text,
  Avatar,
  Badge,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import student1 from "../assets/images/student-progress/student1.png";
import student1c from "../assets/images/student-progress/student1c.png";
import student2 from "../assets/images/student-progress/student2.png";
import student3 from "../assets/images/student-progress/student3.png";
import student4 from "../assets/images/student-progress/student4.png";
import sendicon from "../assets/icons/sendicon.png";

function MessagesPageContent() {
  const [isLowerThan400] = useMediaQuery("(max-width: 30rem)");

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
            Messages
          </Text>
        </Flex>

        <Flex>
          <Box flex={1}>
            <Flex
              w={"65%"}
              boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"}
              py={"1.5rem"}
              px={"1rem"}
              borderRadius={".5rem"}
              mb={"2rem"}
              alignItems={"center"}
            >
              <Box flex={1}>
                <Text textAlign={"start"} color={"#0065FF"}>
                  All Messages
                </Text>
                <Text fontSize={"1.5rem"} textAlign={"start"} color={"#003E9C"} fontWeight={500}>
                  24
                </Text>
              </Box>
              <Flex
                flex={1}
                justifyContent={"center"}
                alignItems={"center"}
                border={"1px solid #0065FF"}
                borderRadius={".5rem"}
                py={".5rem"}
                w={"100%"}
                cursor={"pointer"}
                mt={"1rem"}
                px={".2rem"}
              >
                <Box mr={".5rem"}>
                  <BsThreeDots color={"#0065FF"} />
                </Box>
                <Text color={"#0065FF"}>Mark all as read</Text>
              </Flex>
            </Flex>

            <Box
              py={"1rem"}
              px={"1rem"}
              borderRadius={".5rem"}
              boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.1)"}
              mr={"1rem"}
            >
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
                        right={6}
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

              <Box mb={"1rem"}>
                <Flex justifyContent={"flex-start"} alignItems={"center"}>
                  <Box mr={".5rem"}>
                    <Avatar name="Adeola Bats" src={student2} />
                  </Box>
                  <Box>
                    <Text color={"#6BA6FF"} mb={".5rem"} fontSize={".75rem"}>
                      Adeola Bats
                    </Text>
                    <Box mr={"1rem"} position="relative">
                      <CiBellOn color={"#96C0FF"} size={25} />
                      <Badge
                        position={"absolute"}
                        top={-1.5}
                        right={6}
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

              <Box mb={"1rem"}>
                <Flex justifyContent={"flex-start"} alignItems={"center"}>
                  <Box mr={".5rem"}>
                    <Avatar name="Ying Toms" src={student3} />
                  </Box>
                  <Box>
                    <Text color={"#6BA6FF"} mb={".5rem"} fontSize={".75rem"}>
                      Ying Toms
                    </Text>
                    <Box mr={"1rem"} position="relative">
                      <CiBellOn color={"#96C0FF"} size={25} />
                      <Badge
                        position={"absolute"}
                        top={-1.5}
                        right={6}
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

              <Box mb={"1rem"}>
                <Flex justifyContent={"flex-start"} alignItems={"center"}>
                  <Box mr={".5rem"}>
                    <Avatar name="Tailor Hings" src={student4} />
                  </Box>
                  <Box>
                    <Text color={"#6BA6FF"} mb={".5rem"} fontSize={".75rem"}>
                      Tailor Hings
                    </Text>
                    <Box mr={"1rem"} position="relative">
                      <CiBellOn color={"#96C0FF"} size={25} />
                      <Badge
                        position={"absolute"}
                        top={-1.5}
                        right={6}
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
                        right={6}
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

          <Box flex={1} boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.15)"} borderRadius={".75rem"} h={"30rem"} mt={"6.5rem"}>
            <Flex boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.15)"} borderRadius={".5rem"} alignItems={"center"}>
              <Box mx={"2rem"} my={"1rem"}>
                <Avatar name="Smith Blacks" src={student1c} size="xl" />
              </Box>
              <Text color={"#0065FF"}>Smith Blacks</Text>
            </Flex>
            <Box>
              <Flex my={"1rem"} mx={".5rem"} justifyContent={"flex-start"}>
                <Box w={"60%"} bg={"#C2C7D0"} h={"6rem"} borderRadius={"2.5rem"}></Box>
              </Flex>

              <Flex my={"1rem"} mx={".5rem"} justifyContent={"flex-end"}>
                <Box w={"60%"} bg={"#DFE2E6"} h={"3.813rem"} borderRadius={"2.5rem"}></Box>
              </Flex>

              <Flex my={"1rem"} mx={".5rem"} justifyContent={"flex-start"}>
                <Box w={"60%"} bg={"#B3B9C4"} h={"3.125rem"} borderRadius={"2.5rem"}></Box>
              </Flex>

              <InputGroup>
                <Input
                  bg={"#DFE2E6"}
                  borderRadius={"0px 0px 12px 12px"}
                  h={"5.563rem"}
                  type="email"
                  id="email"
                  sx={{ "::placeholder": { color: "#5D6B82", fontSize: `${isLowerThan400 ? ".7rem" : "1rem"}` } }}
                  placeholder="Type your message..."
                />
                <InputRightElement
                  mt={"1.5rem"}
                  mr={"1rem"}
                  cursor={"pointer"}
                  children={<Image src={sendicon} alt="Send Icon" />}
                />
              </InputGroup>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default MessagesPageContent;
