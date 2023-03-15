import React from "react";
import QuizAssignmentPageContent from "../components/QuizAssignmentPageContent";
import { Helmet } from "react-helmet-async";

function QuizAssignmentPage() {
  return (
    <>
      <Helmet>
        <title>Quiz Assignment</title>
        <meta name="description" content="Check Assessments!" />
        <link rel="canonical" href="/quiz-assignment" />
      </Helmet>
      <QuizAssignmentPageContent />
    </>
  );
}

export default QuizAssignmentPage;
