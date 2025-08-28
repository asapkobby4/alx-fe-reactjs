// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Route for Profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route Example */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
