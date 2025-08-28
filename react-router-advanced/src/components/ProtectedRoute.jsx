import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Fake auth check (replace with real auth logic later)
  return localStorage.getItem("auth") === "true";
};

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
}
