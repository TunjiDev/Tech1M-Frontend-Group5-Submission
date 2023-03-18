import { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Wrapper from "./components/wrapper/Wrapper";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import InstructorDashboardPage from "./pages/InstructorDashboardPage";
import CoursesPage from "./pages/CoursesPage";
import StudentsInstructorPage from "./pages/StudentsInstructorPage";
import PaymentsPage from "./pages/PaymentsPage";
import QuizAssignmentPage from "./pages/QuizAssignmentPage";
import MessagesPage from "./pages/MessagesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthContext from "./context-store/authContext";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Box>
      <Routes>
        {!authCtx.isLoggedIn && <Route path="/" element={<HomePage />} />}
        {authCtx.isLoggedIn && authCtx.role === "Super Admin" && (
          <Route path="/" element={<Navigate replace to="/dashboard-admin" />} />
        )}
        {authCtx.isLoggedIn && authCtx.role === "Instructor" && (
          <Route path="/" element={<Navigate replace to="/dashboard-instructor" />} />
        )}

        {authCtx.isLoggedIn && authCtx.role === "Super Admin" && (
          <Route path="/signup" element={<Navigate replace to="/dashboard-admin" />} />
        )}
        {authCtx.isLoggedIn && authCtx.role === "Instructor" && (
          <Route path="/signup" element={<Navigate replace to="/dashboard-instructor" />} />
        )}
        {authCtx.isLoggedIn && authCtx.role === "Super Admin" && (
          <Route path="/login" element={<Navigate replace to="/dashboard-admin" />} />
        )}
        {authCtx.isLoggedIn && authCtx.role === "Instructor" && (
          <Route path="/login" element={<Navigate replace to="/dashboard-instructor" />} />
        )}

        {!authCtx.isLoggedIn && <Route path="/signup" element={<SignupPage />} />}
        {!authCtx.isLoggedIn && <Route path="/login" element={<LoginPage />} />}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        {authCtx.isLoggedIn && authCtx.role === "Super Admin" && (
          <Route
            path="/dashboard-admin"
            element={
              <Wrapper>
                {" "}
                <AdminDashboardPage />
              </Wrapper>
            }
          />
        )}

        {authCtx.isLoggedIn && authCtx.role === "Instructor" && (
          <Route
            path="/dashboard-instructor"
            element={
              <Wrapper>
                {" "}
                <InstructorDashboardPage />
              </Wrapper>
            }
          />
        )}
        {authCtx.isLoggedIn && authCtx.role === "Super Admin" && (
          <Route
            path="/courses"
            element={
              <Wrapper>
                {" "}
                <CoursesPage />
              </Wrapper>
            }
          />
        )}
        {authCtx.isLoggedIn && authCtx.role === "Instructor" && (
          <Route
            path="/students-instructor"
            element={
              <Wrapper>
                {" "}
                <StudentsInstructorPage />
              </Wrapper>
            }
          />
        )}
        {authCtx.isLoggedIn && authCtx.role === "Super Admin" && (
          <Route
            path="/payments"
            element={
              <Wrapper>
                {" "}
                <PaymentsPage />
              </Wrapper>
            }
          />
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/quiz-assignment"
            element={
              <Wrapper>
                {" "}
                <QuizAssignmentPage />
              </Wrapper>
            }
          />
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/messages"
            element={
              <Wrapper>
                {" "}
                <MessagesPage />
              </Wrapper>
            }
          />
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
}

export default App;
