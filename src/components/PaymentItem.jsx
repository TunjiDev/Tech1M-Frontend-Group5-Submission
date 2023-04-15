import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";

function PaymentItem(props) {
  return (
    <>
      {props.paymentData.map((item, i) => (
        <Flex
          bg={"#F5F6F7"}
          px={"1rem"}
          py={"1rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={".5rem"}
          key={i}
        >
          <Flex alignItems={"center"}>
            <Box mr={".5rem"}>
              <Image src={item.imgsrc} alt={item.course} />
            </Box>
            <Box w={"70%"}>
              <Text color={"#003E9C"}>{item.name}</Text>
              <Text color={"#003E9C"}>{item.course}</Text>
              <Text color={"#B3B9C4"} fontSize={".75rem"}>
                {item.invoiceNo}
              </Text>
            </Box>
          </Flex>
          <Box color={"#B3B9C4"}>
            <Text textAlign={"right"}>{item.amountPaid}</Text>
            <Text textAlign={"right"}>{item.status}</Text>
            <Text textAlign={"right"}>{item.date}</Text>
          </Box>
        </Flex>
      ))}
    </>
  );
}

export default PaymentItem;
