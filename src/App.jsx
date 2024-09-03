import './App.css';
import Layout from './Layout';
import PublicLayout from './Routes/public-route';

function App() {
	return (
		<>
			<Layout>
				<PublicLayout />
			</Layout>
			{/* <ScrollToTop />
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
            path="/BlogDetail/:id"
            element={
              <>
                <Navbar />
                <div className="min-h-screen">
                  <BlogDetail />
                </div>
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
            path="/About"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/Blogs"
            element={
              <>
                <Navbar />
                <div className="min-h-screen">
                  <AllBlogs />
                </div>
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
         
        </Routes> */}
		</>
	);
}

export default App;
