import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage if available
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const setTokens = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const getAccessToken = () => localStorage.getItem("accessToken");
  const getRefreshToken = () => localStorage.getItem("refreshToken");

  const removeTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const refreshAccessToken = async () => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      throw new Error("Refresh token is missing");
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/token/refresh/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          // If the refresh token is expired or invalid, remove the user and tokens
          removeTokens();
          setUser(null);
          localStorage.removeItem("user");
          navigate("/Login");
          throw new Error("Session expired, please log in again");
        }
        throw new Error("Failed to refresh token");
      }

      const result = await response.json();
      setTokens(result.access, result.refresh);
      return result.access;
    } catch (error) {
      console.error("Error refreshing access token:", error);
      removeTokens();
      setUser(null);
      localStorage.removeItem("user");
      navigate("/Login");
      throw error;
    }
  };

  const fetchWithAuth = async (url, options = {}) => {
    let accessToken = getAccessToken();
    if (!accessToken) {
      accessToken = await refreshAccessToken();
    }

    const headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await fetch(url, { ...options, headers });

    if (response.status === 401) {
      // Attempt to refresh token and retry the request
      accessToken = await refreshAccessToken();
      headers.Authorization = `Bearer ${accessToken}`;
      return fetch(url, { ...options, headers });
    }

    return response;
  };

  const showErrorToast = (message) => {
    setError(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        setTokens(result.access, result.refresh);
        const userData = { email };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData)); // Save user data to localStorage
        navigate("/");
      } else {
        showErrorToast(result.message || "Incorrect username or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      showErrorToast("An error occurred. Please try again!");
    }
  };
  
  const signup = async (firstName, lastName, email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        navigate("/Login"); // Redirect to login page after successful registration
      } else {
        showErrorToast(result.message || "Signup failed. Please try again!");
      }
    } catch (error) {
      console.error("Signup error:", error);
      showErrorToast("An error occurred. Please try again!");
    }
  };

  const logout = async () => {
    try {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();
      const response = await fetch(`${BASE_URL}/auth/logout/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (response.ok) {
        console.log("Logout successful, navigating to login...");
        removeTokens();
        setUser(null);
        navigate("/Login");
      } else {
        const { message } = await response.json();
        console.error("Logout error:", message || "Failed to log out.");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const value = {
    user,
    error,
    showToast,
    login,
    signup,
    logout,
    fetchWithAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
