// import React, {
//   createContext,
//   useState,
//   useContext,
//   useEffect,
//   useCallback,
// } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext(null);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });
//   const [error, setError] = useState("");
//   const [showToast, setShowToast] = useState(false);
//   const navigate = useNavigate();
//   const BASE_URL = import.meta.env.VITE_BASE_URL;

//   const setTokens = useCallback((accessToken, refreshToken) => {
//     localStorage.setItem("accessToken", accessToken);
//     localStorage.setItem("refreshToken", refreshToken);
//   }, []);

//   const getAccessToken = useCallback(
//     () => localStorage.getItem("accessToken"),
//     []
//   );
//   const getRefreshToken = useCallback(
//     () => localStorage.getItem("refreshToken"),
//     []
//   );

//   const removeTokens = useCallback(() => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//   }, []);

//   const refreshAccessToken = useCallback(async () => {
//     const refreshToken = getRefreshToken();
//     if (!refreshToken) {
//       throw new Error("Refresh token is missing");
//     }

//     try {
//       const response = await fetch(`${BASE_URL}/auth/token/refresh/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ refresh: refreshToken }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to refresh token");
//       }

//       const result = await response.json();
//       setTokens(result.access, result.refresh);
//       return result.access;
//     } catch (error) {
//       console.error("Error refreshing access token:", error);
//       throw error;
//     }
//   }, [BASE_URL, getRefreshToken, setTokens]);

//   const fetchWithAuth = useCallback(
//     async (url, options = {}) => {
//       let accessToken = getAccessToken();
//       if (!accessToken) {
//         try {
//           accessToken = await refreshAccessToken();
//         } catch (error) {
//           handleLogout();
//           throw new Error("Session expired, please log in again");
//         }
//       }

//       const headers = {
//         ...options.headers,
//         Authorization: `Bearer ${accessToken}`,
//       };

//       const response = await fetch(url, { ...options, headers });

//       if (response.status === 401) {
//         try {
//           accessToken = await refreshAccessToken();
//           headers.Authorization = `Bearer ${accessToken}`;
//           return fetch(url, { ...options, headers });
//         } catch (error) {
//           handleLogout();
//           throw new Error("Session expired, please log in again");
//         }
//       }

//       return response;
//     },
//     [getAccessToken, refreshAccessToken]
//   );

//   const showErrorToast = useCallback((message) => {
//     setError(message);
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const response = await fetch(`${BASE_URL}/auth/login/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         console.log("Login successful, tokens:", result.access, result.refresh);
//         setTokens(result.access, result.refresh);
//         const userData = { email };
//         setUser(userData);
//         localStorage.setItem("user", JSON.stringify(userData));
//         navigate("/");
//       } else {
//         showErrorToast(result.message || "Incorrect username or password!");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       showErrorToast("An error occurred. Please try again!");
//     }
//   };

//   const signup = async (firstName, lastName, email, password) => {
//     try {
//       const response = await fetch(`${BASE_URL}/auth/register/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           first_name: firstName,
//           last_name: lastName,
//           email,
//           password,
//         }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         navigate("/Login");
//       } else {
//         showErrorToast(result.message || "Signup failed. Please try again!");
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//       showErrorToast("An error occurred. Please try again!");
//     }
//   };

//   const handleLogout = useCallback(() => {
//     removeTokens();
//     setUser(null);
//     localStorage.removeItem("user");
//     navigate("/Login");
//   }, [removeTokens, navigate]);

//   const logout = useCallback(async () => {
//     try {
//       const accessToken = getAccessToken();
//       const refreshToken = getRefreshToken();
//       if (!accessToken || !refreshToken) {
//         handleLogout();
//         return;
//       }

//       const response = await fetch(`${BASE_URL}/auth/logout/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: JSON.stringify({ refresh_token: refreshToken }),
//       });

//       if (response.ok) {
//         console.log("Logout successful");
//       } else {
//         console.error("Logout error:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error logging out:", error);
//     } finally {
//       handleLogout();
//     }
//   }, [BASE_URL, getAccessToken, getRefreshToken, handleLogout]);

//   useEffect(() => {
//     const checkTokenExpiration = async () => {
//       const accessToken = getAccessToken();
//       if (accessToken) {
//         try {
//           await fetchWithAuth(`${BASE_URL}/auth/check-token/`);
//         } catch (error) {
//           handleLogout();
//         }
//       }
//     };

//     checkTokenExpiration();
//     const intervalId = setInterval(checkTokenExpiration, 5 * 60 * 1000); // Check every 5 minutes

//     return () => clearInterval(intervalId);
//   }, [BASE_URL, fetchWithAuth, getAccessToken, handleLogout]);

//   const value = {
//     user,
//     error,
//     showToast,
//     login,
//     signup,
//     logout,
//     fetchWithAuth,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const setTokens = useCallback((accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }, []);

  const getAccessToken = useCallback(
    () => localStorage.getItem("accessToken"),
    []
  );
  const getRefreshToken = useCallback(
    () => localStorage.getItem("refreshToken"),
    []
  );

  const removeTokens = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }, []);

  const refreshAccessToken = useCallback(async () => {
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
        throw new Error("Failed to refresh token");
      }

      const result = await response.json();
      setTokens(result.access, result.refresh);
      return result.access;
    } catch (error) {
      console.error("Error refreshing access token:", error);
      throw error;
    }
  }, [BASE_URL, getRefreshToken, setTokens]);

  const fetchWithAuth = useCallback(
    async (url, options = {}) => {
      let accessToken = getAccessToken();
      if (!accessToken) {
        try {
          accessToken = await refreshAccessToken();
        } catch (error) {
          handleLogout();
          throw new Error("Session expired, please log in again");
        }
      }

      const headers = new Headers(options.headers);
      headers.set("Authorization", `Bearer ${accessToken}`);

      const response = await fetch(url, { ...options, headers });

      if (response.status === 401) {
        try {
          accessToken = await refreshAccessToken();
          headers.set("Authorization", `Bearer ${accessToken}`);
          return fetch(url, { ...options, headers });
        } catch (error) {
          handleLogout();
          throw new Error("Session expired, please log in again");
        }
      }

      return response;
    },
    [getAccessToken, refreshAccessToken]
  );

  const showErrorToast = useCallback((message) => {
    setError(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, []);

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
      if (response.ok && result.success) {
        console.log(
          "Login successful, tokens:",
          result.data.access,
          result.data.refresh
        );
        setTokens(result.data.access, result.data.refresh);
        const userData = {
          email: result.data.email,
          first_name: result.data.first_name,
          last_name: result.data.last_name,
          date_joined: result.data.date_joined,
          is_active: result.data.is_active,
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
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
        navigate("/Login");
      } else {
        showErrorToast(result.message || "Signup failed. Please try again!");
      }
    } catch (error) {
      console.error("Signup error:", error);
      showErrorToast("An error occurred. Please try again!");
    }
  };

  const handleLogout = useCallback(() => {
    removeTokens();
    setUser(null);
    localStorage.removeItem("user");
    navigate("/Login");
  }, [removeTokens, navigate]);

  const logout = useCallback(async () => {
    try {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();
      if (!accessToken || !refreshToken) {
        handleLogout();
        return;
      }

      const response = await fetch(`${BASE_URL}/auth/logout/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (response.ok) {
        console.log("Logout successful");
      } else {
        console.error("Logout error:", response.statusText);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      handleLogout();
    }
  }, [BASE_URL, getAccessToken, getRefreshToken, handleLogout]);

  useEffect(() => {
    const checkTokenExpiration = async () => {
      const accessToken = getAccessToken();
      if (accessToken) {
        try {
          await fetchWithAuth(`${BASE_URL}/auth/check-token/`);
        } catch (error) {
          handleLogout();
        }
      }
    };

    checkTokenExpiration();
    const intervalId = setInterval(checkTokenExpiration, 5 * 60 * 1000); // Check every 5 minutes

    return () => clearInterval(intervalId);
  }, [BASE_URL, fetchWithAuth, getAccessToken, handleLogout]);

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
