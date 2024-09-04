import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AddArticle from "../Pages/Articles/create.tsx";
import PageNotFound from "../Pages/PageNotFound/index.tsx";

const LoginPage = lazy(() => import("../Pages/Auth/Login"));
const SignupPage = lazy(() => import("../Pages/Auth/Signup"));
const HomePage = lazy(() => import("../Pages/Homepage/index.tsx"));
const BlogList = lazy(() => import("../Pages/Blogs/list.tsx"));
const BlogDetail = lazy(() => import("../Pages/Blogs/details.tsx"));
const AboutPage = lazy(() => import("../Pages/About"));
const ContactPage = lazy(() => import("../Pages/Contact/index.tsx"));

// roadmaps
const AIMLPage = lazy(() => import("../Pages/Roadmaps/AIML/index.tsx"));
const BackendPage = lazy(() => import("../Pages/Roadmaps/Backend"));
const CybersecurityPage = lazy(() => import("../Pages/Roadmaps/Cybersecurity/index.tsx"));
const MernstackPage = lazy(() => import("../Pages/Roadmaps/Mernstack/index.tsx"));
const FrontendPage = lazy(() => import("../Pages/Roadmaps/Frontend/index.tsx"));
const FullstackPage = lazy(() => import("../Pages/Roadmaps/Fullstack/index.tsx"));

const PublicLayout = () => {
  return (
    <Suspense fallback={""}>
      <Routes>
        {/* Auth page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Blog routes */}
        <Route path="/blog/create" element={<AddArticle />} />
        <Route path="/blog/list" element={<BlogList />} />
        <Route path="/blog/details/:id" element={<BlogDetail />} />

        {/* About us */}
        <Route path="/about" element={<AboutPage />} />

        {/* RoadMaps */}
        <Route path="/roadmap/mernstack" element={<MernstackPage />} />
        <Route path="/roadmap/fullstack" element={<FullstackPage />} />
        <Route path="/roadmap/frontend" element={<FrontendPage />} />
        <Route path="/roadmap/backend" element={<BackendPage />} />
        <Route path="/roadmap/ai-ml" element={<AIMLPage />} />
        <Route path="/roadmap/cybersecurity" element={<CybersecurityPage />} />

        {/* Contact us */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Projects */}

        {/* 404 Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default PublicLayout;
