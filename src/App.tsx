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

interface IProtectedRouteProps {
  isAuthenticated: boolean;
  redirectPath?: string;
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
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={authenticated}>
              <WelcomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
