import React from "react";
import HomePageContent from "../components/HomePageContent";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Welcome</title>
        <meta
          name="description"
          content="Get ready to explore the exciting world of
          technology and learn new skills that will help you shape your future."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <HomePageContent />
    </>
  );
}

export default HomePage;
