import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Wrapper from "./components/wrapper/Wrapper";
import DashboardPage from "./pages/DashboardPage";
import CoursesPage from "./pages/CoursesPage";
import StudentsPage from "./pages/StudentsPage";
import PaymentsPage from "./pages/PaymentsPage";
import QuizAssignmentPage from "./pages/QuizAssignmentPage";
import MessagesPage from "./pages/MessagesPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/dashboard"
          element={
            <Wrapper>
              {" "}
              <DashboardPage />
            </Wrapper>
          }
        />
        <Route
          path="/courses"
          element={
            <Wrapper>
              {" "}
              <CoursesPage />
            </Wrapper>
          }
        />
        <Route
          path="/students"
          element={
            <Wrapper>
              {" "}
              <StudentsPage />
            </Wrapper>
          }
        />
        <Route
          path="/payments"
          element={
            <Wrapper>
              {" "}
              <PaymentsPage />
            </Wrapper>
          }
        />
        <Route
          path="/quiz-assignment"
          element={
            <Wrapper>
              {" "}
              <QuizAssignmentPage />
            </Wrapper>
          }
        />
        <Route
          path="/messages"
          element={
            <Wrapper>
              {" "}
              <MessagesPage />
            </Wrapper>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
}

export default App;
