import React from "react";
import { Tr, Td } from "@chakra-ui/react";

function StudentItem(props) {
  return (
    <>
      {props.studentData.map((item, i) => (
        <Tr bg={"#F5F6F7"} color={"#003E9C"} mt={".5rem"} key={i}>
          <Td>{item.name}</Td>
          <Td>{item.course}</Td>
          <Td>{item.level}</Td>
          <Td>{item.guardianContact}</Td>
          <Td>{item.schoolName}</Td>
        </Tr>
      ))}
    </>
  );
}

export default StudentItem;
