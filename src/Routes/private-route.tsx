import Profile from "../Pages/Profile/index";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const PrivateLayout: React.FC = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* private page routes goes here... */}
      <Routes>
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
};

export default PrivateLayout;
