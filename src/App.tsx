import { Provider } from "react-redux";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Layout from "./Layout";
import PublicLayout from "./Routes/public-route";
import { persistor, store } from "./Utils/store";
import { PersistGate } from "redux-persist/integration/react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

function App() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/signup" || location.pathname === "/login";
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ScrollToTop />
        {/* Auth page */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
