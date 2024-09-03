import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddArticle from '../Pages/Articles/AddArticle';
import PageNotFound from '../Pages/PageNotFound';

const LoginPage = lazy(()=> import('../Pages/Auth/Login'))
const SignupPage = lazy(()=> import('../Pages/Auth/Signup'))
const HomePage = lazy(()=> import('../Pages/Homepage'))
const BlogList = lazy(()=> import('../Pages/Blogs/list'))
const BlogDetail = lazy(()=> import('../Pages/Blogs/details'))
const AboutPage = lazy(()=> import('../Pages/About'))
const ContactPage = lazy(()=> import('../Pages/Contact'))

// roadmaps
const AIMLPage = lazy(()=> import('../Pages/Roadmaps/AIML'))
const BackendPage = lazy(()=> import('../Pages/Roadmaps/Cybersecurity'))
const CybersecurityPage = lazy(()=> import('../Pages/Roadmaps/Cybersecurity'))
const MernstackPage = lazy(()=> import('../Pages/Roadmaps/Mernstack'))
const FrontendPage = lazy(()=> import('../Pages/Roadmaps/Frontend'))
const FullstackPage = lazy(()=> import('../Pages/Roadmaps/Fullstack'))

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
        <Route path='/blog/create' element={<AddArticle />} />
        <Route path="/blog/list" element={<BlogList />} />
        <Route path="/blog/details/:id" element={<BlogDetail />} />

        {/* About us */}
        <Route path='/about' element={<AboutPage />} />

        {/* RoadMaps */}
        <Route path='/roadmap/mernstack' element={<MernstackPage />} />
        <Route path='/roadmap/fullstack' element={<FullstackPage />} />
        <Route path='/roadmap/frontend' element={<FrontendPage />} />
        <Route path='/roadmap/backend' element={<BackendPage />} />
        <Route path='/roadmap/ai-ml' element={<AIMLPage />} />
        <Route path='/roadmap/cybersecurity' element={<CybersecurityPage />} />

        {/* Contact us */}
        <Route path='/contact' element={<ContactPage />} />

        {/* Projects */}

        {/* 404 Page Not Found */}
        <Route path="*" element={<PageNotFound />} />

			</Routes>
		</Suspense>
	);
};

export default PublicLayout;
