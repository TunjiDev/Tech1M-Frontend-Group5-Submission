import React from "react";
import LoginPageContent from "../components/LoginPageContent";
import { Helmet } from "react-helmet-async";

function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Log in to explore!" />
        <link rel="canonical" href="/login" />
      </Helmet>
      <LoginPageContent />
    </>
  );
}

export default LoginPage;
