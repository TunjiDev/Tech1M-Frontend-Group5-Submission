import React from "react";
import PaymentsPageContent from "../components/PaymentsPageContent";
import { Helmet } from "react-helmet-async";

function PaymentsPage() {
  return (
    <>
      <Helmet>
        <title>Payments</title>
        <meta name="description" content="Kindly Make all payments here!" />
        <link rel="canonical" href="/payments" />
      </Helmet>
      <PaymentsPageContent />
    </>
  );
}

export default PaymentsPage;
