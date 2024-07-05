import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AddArticle from "./Articles/AddArticle";
import Login from "./Login/login"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/AddBlog"
            element={
              <>
                <Navbar />
                <AddArticle />
                <Footer />
              </>
            }
          />
          <Route path="/Login"
          element={<Login/>}
          />
        </Routes>

      </Router>
    </>
  );
}

export default App;
