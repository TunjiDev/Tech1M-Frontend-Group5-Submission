import React from "react";
import StudentsAdminPageContent from "../components/StudentsAdminPageContent";
import { Helmet } from "react-helmet-async";

function StudentsAdminPage() {
  return (
    <>
      <Helmet>
        <title>Students</title>
        <meta name="description" content="Check Student Progress!" />
        <link rel="canonical" href="/students" />
      </Helmet>
      <StudentsAdminPageContent />
    </>
  );
}

export default StudentsAdminPage;
