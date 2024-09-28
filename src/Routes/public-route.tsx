import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound/index.tsx";
import Profile from "../Pages/Profile/index.tsx";


const HomePage = lazy(() => import("../Pages/Homepage/index.tsx"));
const BlogList = lazy(() => import("../Pages/Blogs/BlogList/index.tsx"));
const BlogDetail = lazy(() => import("../Pages/Blogs/BlogDetail/index.tsx"));
const LatestBlog = lazy(
  () => import("../Pages/Blogs/LatestBlogInsight/index.tsx")
);
const AboutPage = lazy(() => import("../Pages/About"));

const ContactPage = lazy(() => import("../Pages/Contact/index.tsx"));
// roadmaps
const AIMLPage = lazy(() => import("../Pages/Roadmaps/AIML/index.tsx"));
const BackendPage = lazy(() => import("../Pages/Roadmaps/Backend"));
const CybersecurityPage = lazy(
  () => import("../Pages/Roadmaps/Cybersecurity/index.tsx")
);
const MernstackPage = lazy(
  () => import("../Pages/Roadmaps/Mernstack/index.tsx")
);
const FrontendPage = lazy(() => import("../Pages/Roadmaps/Frontend/index.tsx"));
const FullstackPage = lazy(
  () => import("../Pages/Roadmaps/Fullstack/index.tsx")
);

const PublicLayout = () => {
  return (
    <Suspense fallback={""}>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Blog routes */}
        <Route path="/blog/list" element={<BlogList />} />
        <Route path="/blog/latest" element={<LatestBlog />} />
        <Route path="/blog/details/:slug" element={<BlogDetail />} />

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

        <Route path="/profile" element={<Profile />} />

        {/* 404 Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default PublicLayout;
