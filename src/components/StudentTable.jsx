import React from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer, useMediaQuery } from "@chakra-ui/react";
import StudentItem from "./StudentItem";

const studentData1 = [
  {
    name: "Smith Rans",
    course: "Fundamentals of Web Development",
    level: "Beginner",
    guardianContact: "+91 8920039",
    schoolName: "Montessori College Hilton",
  },
  {
    name: "Toms Kid",
    course: "App Development",
    level: "Intermediate",
    guardianContact: "+44345 0039",
    schoolName: "Teeside Basic School Cardiff",
  },
  {
    name: "Tomide Williams",
    course: "UI/UX Design Fundamentals",
    level: "Advance",
    guardianContact: "+3431 89239",
    schoolName: "Borison Jnr School Newtown",
  },
  {
    name: "Chuks Emeka",
    course: "Fundamentals of Web Development",
    level: "Intermediate",
    guardianContact: "+91 8920039",
    schoolName: "Montessori College Hilton",
  },
  {
    name: "Chuks Emeka",
    course: "Fundamentals of Web Development",
    level: "Intermediate",
    guardianContact: "+91 8920039",
    schoolName: "Montessori College Hilton",
  },
  {
    name: "Chuks Emeka",
    course: "Fundamentals of Web Development",
    level: "Intermediate",
    guardianContact: "+91 8920039",
    schoolName: "Montessori College Hilton",
  },
  {
    name: "Chuks Emeka",
    course: "Fundamentals of Web Development",
    level: "Intermediate",
    guardianContact: "+91 8920039",
    schoolName: "Montessori College Hilton",
  },
  {
    name: "Chuks Emeka",
    course: "Fundamentals of Web Development",
    level: "Intermediate",
    guardianContact: "+91 8920039",
    schoolName: "Montessori College Hilton",
  },
  {
    name: "Chuks Emeka",
    course: "Fundamentals of Web Development",
    level: "Intermediate",
    guardianContact: "+91 8920039",
    schoolName: "Montessori College Hilton",
  },
];

const studentData2 = [
  {
    name: "Tomide Williams",
    course: "UI/UX Design Fundamentals",
    level: "Advance",
    guardianContact: "+3431 89239",
    schoolName: "Borison Jnr School Newtown",
  },
  {
    name: "Toms Kid",
    course: "App Development",
    level: "Intermediate",
    guardianContact: "+44345 0039",
    schoolName: "Teeside Basic School Cardiff",
  },
  {
    name: "Smith Rans",
    course: "Fundamentals of Web Development",
    level: "Beginner",
    guardianContact: "+91 8920039",
    schoolName: "Montessori College Hilton",
  },
  {
    name: "Toms Kid",
    course: "App Development",
    level: "Intermediate",
    guardianContact: "+44345 0039",
    schoolName: "Teeside Basic School Cardiff",
  },
  {
    name: "Tomide Williams",
    course: "UI/UX Design Fundamentals",
    level: "Advance",
    guardianContact: "+3431 89239",
    schoolName: "Borison Jnr School Newtown",
  },
  {
    name: "Chuks Emeka",
    course: "Fundamentals of Web Development",
    level: "Intermediate",
    guardianContact: "+91 8920039",
    schoolName: "Montessori College Hilton",
  },
  {
    name: "Chuks Emeka",
    course: "Fundamentals of Web Development",
    level: "Intermediate",
    guardianContact: "+91 8920039",
    schoolName: "Montessori College Hilton",
  },
  {
    name: "Smith Rans",
    course: "Fundamentals of Web Development",
    level: "Beginner",
    guardianContact: "+91 8920039",
    schoolName: "Montessori College Hilton",
  },
  {
    name: "Tomide Williams",
    course: "UI/UX Design Fundamentals",
    level: "Advance",
    guardianContact: "+3431 89239",
    schoolName: "Borison Jnr School Newtown",
  },
];

function StudentTable(props) {
  const [isWidthLowerThan400] = useMediaQuery("(max-width: 30rem)");

  return (
    <>
      <TableContainer mt={"2rem"} w={isWidthLowerThan400 ? "22rem" : null}>
        <Table variant="simple">
          <Thead bg={"#E6F0FF"} borderLeftRadius={".1rem"} borderRightRadius={".1rem"}>
            <Tr>
              <Th
                color={"#6BA6FF"}
                fontWeight={isWidthLowerThan400 ? 400 : 500}
                fontSize={isWidthLowerThan400 ? ".5rem" : ".75rem"}
              >
                NAME
              </Th>
              <Th
                color={"#6BA6FF"}
                fontWeight={isWidthLowerThan400 ? 400 : 500}
                fontSize={isWidthLowerThan400 ? ".5rem" : ".75rem"}
              >
                COURSE
              </Th>
              <Th
                color={"#6BA6FF"}
                fontWeight={isWidthLowerThan400 ? 400 : 500}
                fontSize={isWidthLowerThan400 ? ".5rem" : ".75rem"}
              >
                LEVEL
              </Th>
              <Th
                color={"#6BA6FF"}
                fontWeight={isWidthLowerThan400 ? 400 : 500}
                fontSize={isWidthLowerThan400 ? ".5rem" : ".75rem"}
              >
                GUARDIAN CONTACT
              </Th>
              <Th
                color={"#6BA6FF"}
                fontWeight={isWidthLowerThan400 ? 400 : 500}
                fontSize={isWidthLowerThan400 ? ".5rem" : ".75rem"}
              >
                SCHOOL NAME
              </Th>
            </Tr>
          </Thead>

          <Tbody fontSize={isWidthLowerThan400 ? ".625rem" : null}>
            {props.prevPage && <StudentItem studentData={studentData1} />}
            {props.nextPage && <StudentItem studentData={studentData2} />}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default StudentTable;
