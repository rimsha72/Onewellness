import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ForgetPassword from "./pages/ForgetPassword";
import Verify from "./pages/Verify";
import Roles from "./pages/Roles";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    };
    
    checkAuth();
  }, []);

  return (
    <Routes>
      <Route
        path="*"
        element={
          isAuthenticated ? (
            <Navigate to="/" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/" replace state={{ from: location }} />
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )
        }
      />
      <Route
        path="/forget-password"
        element={
            <ForgetPassword setIsAuthenticated={setIsAuthenticated} />
        }
      />
       <Route
        path="/verify"
        element={
            <Verify setIsAuthenticated={setIsAuthenticated} />
        }
      />
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <RootLayout />
          ) : (
            <Navigate to="/login" replace state={{ from: location }} />
          )
        }
      >
        <Route index element={<Home />} />
        <Route path="/roles" element={<Roles />} />
      </Route>
    </Routes>
  );
}

export default App;