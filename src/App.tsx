import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import EmployeeFormPage from "./pages/EmployeeFormPage";
import Navbar from "./components/Navbar";
import AttendanceForm from "./pages/AttendanceFormPage";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";

interface IProtectedRouteProps {
  isAuthenticated: boolean;
  redirectPath: string;
  children: React.ReactNode;
}

const ProtectedRoute = ({
  isAuthenticated = false,
  redirectPath = "/login",
  children,
}: IProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <>{children}</>;
};

export default function App() {
  const { authenticated } = useContext(AuthContext);

  return (
    <Router>
      {authenticated && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              isAuthenticated={authenticated}
              redirectPath="/login"
            >
              <WelcomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!authenticated} redirectPath="/">
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form/employee"
          element={
            <ProtectedRoute isAuthenticated={authenticated} redirectPath="">
              <EmployeeFormPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form/employee/:id"
          element={
            <ProtectedRoute isAuthenticated={authenticated} redirectPath="">
              <EmployeeFormPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/:id"
          element={
            <ProtectedRoute isAuthenticated={authenticated} redirectPath="">
              <EmployeeDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form/attendance"
          element={
            <ProtectedRoute isAuthenticated={authenticated} redirectPath="">
              <AttendanceForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>Sorry, this page is not available.</h1>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
