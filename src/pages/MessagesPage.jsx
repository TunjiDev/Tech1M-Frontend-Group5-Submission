import React from "react";
import MessagesPageContent from "../components/MessagesPageContent";
import { Helmet } from "react-helmet-async";

function MessagesPage() {
  return (
    <>
      <Helmet>
        <title>Messages</title>
        <meta name="description" content="View all messages!" />
        <link rel="canonical" href="/messages" />
      </Helmet>
      <MessagesPageContent />
    </>
  );
}

export default MessagesPage;
