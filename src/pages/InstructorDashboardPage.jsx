import React from "react";
import InstructorDashboardPageContent from "../components/InstructorDashboardPageContent";
import { Helmet } from "react-helmet-async";

function InstructorDashboardPage() {
  return (
    <>
      <Helmet>
        <title>Instructor Dashboard</title>
        <meta name="description" content="Welcome to your Dashboard!" />
        <link rel="canonical" href="/dashboard-instructor" />
      </Helmet>
      <InstructorDashboardPageContent />
    </>
  );
}

export default InstructorDashboardPage;
