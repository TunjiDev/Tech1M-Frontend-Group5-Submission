import React from "react";
import ForgotPasswordContent from "../components/ForgotPasswordContent";
import { Helmet } from "react-helmet-async";

function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
        <meta name="description" content="Ooops!, Forgot Password!" />
        <link rel="canonical" href="/forgot-password" />
      </Helmet>
      <ForgotPasswordContent />
    </>
  );
}

export default ForgotPasswordPage;
