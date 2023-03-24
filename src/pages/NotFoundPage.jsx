import React from "react";
import NotFoundPageContent from "../components/NotFoundPageContent";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <NotFoundPageContent />;
    </>
  );
}

export default NotFound;
