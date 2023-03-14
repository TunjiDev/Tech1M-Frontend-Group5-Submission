import React from "react";
import SignupPageContent from "../components/SignupPageContent";
import { Helmet } from "react-helmet-async";

function SignupPage() {
  return (
    <>
      <Helmet>
        <title>SignUpPage</title>
        <meta
          name="description"
          content="Join Us!, Create an Account or Register"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <SignupPageContent />
    </>
  );
}

export default SignupPage;
