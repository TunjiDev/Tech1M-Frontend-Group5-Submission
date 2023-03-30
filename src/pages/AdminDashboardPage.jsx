import React from "react";
import AdminDashboardPageContent from "../components/AdminDashboardPageContent";
import { Helmet } from "react-helmet-async";

function AdminDashboardPage() {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
        <meta name="description" content="Welcome to your Dashboard!" />
        <link rel="canonical" href="/dashboard-admin" />
      </Helmet>
      <AdminDashboardPageContent />
    </>
  );
}

export default AdminDashboardPage;
