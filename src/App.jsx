import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AddArticle from "./Articles/AddArticle";
import Login from "./Login/login";
import AllBlogs from "./Blogs/AllBlogs";
import Signup from "./Signup/Signup";
import Mernstack from "./Categories/Mernstack";
import Fullstack from "./Categories/Fullstack";
import Frontend from "./Categories/Frontend";
import Backend from "./Categories/Backend";
import AIML from "./Categories/AIML";
import Cybersecurity from "./Categories/Cybersecurity";
import AddProject from "./Projects/AddProject";
import ProjectShowcase from "./Projects/ProjectShowcase";
import Profile from "./Components/Profile";
import Contact from "./Contactus/contact";

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
          <Route
            path="/Profile"
            element={
              <>
                <Navbar />
                <Profile />
                <Footer />
              </>
            }
          />
          <Route
            path="/Contactus"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/Blogs"
            element={
              <>
                <Navbar />
                <AllBlogs />
                <Footer />
              </>
            }
          />
          <Route
            path="/Mernstack"
            element={
              <>
                <Navbar />
                <Mernstack />
                <Footer />
              </>
            }
          />
          <Route
            path="/Fullstack"
            element={
              <>
                <Navbar />
                <Fullstack />
                <Footer />
              </>
            }
          />
          <Route
            path="/Frontend"
            element={
              <>
                <Navbar />
                <Frontend />
                <Footer />
              </>
            }
          />
          <Route
            path="/Backend"
            element={
              <>
                <Navbar />
                <Backend />
                <Footer />
              </>
            }
          />
          <Route
            path="/AIML"
            element={
              <>
                <Navbar />
                <AIML />
                <Footer />
              </>
            }
          />
          <Route
            path="/Cybersecurity"
            element={
              <>
                <Navbar />
                <Cybersecurity />
                <Footer />
              </>
            }
          />{" "}
          <Route
            path="/ProjectShowcase"
            element={
              <>
                <Navbar />
                <ProjectShowcase />
                <Footer />
              </>
            }
          />
          <Route
            path="/AddProject"
            element={
              <>
                <Navbar />
                <AddProject />
                <Footer />
              </>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
