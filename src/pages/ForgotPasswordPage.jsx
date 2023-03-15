import React from "react";
import ForgotPasswordPageContent from "../components/ForgotPasswordPageContent";
import { Helmet } from "react-helmet-async";

function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
        <meta name="description" content="Ooops!, Forgot Password!" />
        <link rel="canonical" href="/forgot-password" />
      </Helmet>
      <ForgotPasswordPageContent />
    </>
  );
}

export default ForgotPasswordPage;
