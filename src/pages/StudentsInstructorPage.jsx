import React from "react";
import StudentsInstructorPageContent from "../components/StudentsInstructorPageContent";
import { Helmet } from "react-helmet-async";

function StudentsPage() {
  return (
    <>
      <Helmet>
        <title>Students</title>
        <meta name="description" content="Check Student Progress!" />
        <link rel="canonical" href="/students" />
      </Helmet>
      <StudentsInstructorPageContent />
    </>
  );
}

export default StudentsPage;
