import React from "react";
import DashboardPageContent from "../components/DashboardPageContent";
import { Helmet } from "react-helmet-async";

function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <DashboardPageContent />
    </>
  );
}

export default DashboardPage;
