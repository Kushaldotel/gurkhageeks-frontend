import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound/index.tsx";

const HomePage = lazy(() => import("../Pages/Homepage/index.tsx"));
const BlogList = lazy(() => import("../Pages/Blogs/list.tsx"));
const BlogDetail = lazy(() => import("../Pages/Blogs/details.tsx"));
const LatestBlog = lazy(() => import("../Pages/Blogs/latest.tsx"));
const AboutPage = lazy(() => import("../Pages/About"));

const ContactPage = lazy(() => import("../Pages/Contact/index.tsx"));

const RoadmapPage = lazy(()=> import('@/Pages/Roadmaps'))

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
        <Route path="/roadmap/:slug" element={<RoadmapPage />} />

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
