import React from "react";
import StudentsPageContent from "../components/StudentsPageContent";
import { Helmet } from "react-helmet-async";

function StudentsPage() {
  return (
  <>
  <Helmet>
    <title>Students</title>
    <meta name="description" content="Check Student Progress!" />
    <link rel="canonical" href="/students" />
  </Helmet>
  <StudentsPageContent />;
</>
);
}

export default StudentsPage;
