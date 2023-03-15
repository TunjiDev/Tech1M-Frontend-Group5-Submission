import React from "react";
import CoursesPageContent from "../components/CoursesPageContent";
import { Helmet } from "react-helmet-async";

function CoursesPage() {
  return (
    <>
      <Helmet>
        <title>Courses</title>
        <meta name="description" content="See all Courses!" />
        <link rel="canonical" href="/courses" />
      </Helmet>
      <CoursesPageContent />
    </>
  );
}

export default CoursesPage;
