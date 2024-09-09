import { Provider } from "react-redux";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Layout from "./Layout";
import PublicLayout from "./Routes/public-route";
import { PersistGate } from "redux-persist/integration/react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import { Toaster } from "./Components/ui/toaster";
import EmailVerification from "./Pages/Auth/Verification";
import getCookie from "./Utils/cookies/getCookie";
import { persistor, store } from "./store/store";
import VerificationPage from "./Pages/Auth/Verification/verification";

function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/signup" || location.pathname === "/login" || location.pathname.includes('/auth');

  const isAuthenticated = getCookie("accessToken");
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ScrollToTop />
        <Toaster />

        {/* Auth page */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth/verify" element={<VerificationPage />} />
          <Route
            path="/auth/confirm/:uidb/:token"
            element={<EmailVerification />}
          />
        </Routes>

        {!isAuthPage && (
          <Layout>
            <PublicLayout />
          </Layout>
        )}
      </PersistGate>
    </Provider>
  );
}

export default App;
