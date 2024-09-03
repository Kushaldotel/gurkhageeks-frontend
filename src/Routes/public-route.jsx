import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Auth/Login';
import Signup from '../Pages/Auth/Signup';
import Home from '../Pages/Homepage';
import AllBlogs from '../Pages/Blogs/list';
import AboutUs from '../Pages/About';
import ContactUs from '../Pages/Contact';
import AIML from '../Pages/Roadmaps/AIML';
import Backend from '../Pages/Roadmaps/Backend';
import Cybersecurity from '../Pages/Roadmaps/Cybersecurity';
import Frontend from '../Pages/Roadmaps/Frontend';
import Mernstack from '../Pages/Roadmaps/Mernstack';
import Fullstack from '../Pages/Roadmaps/Fullstack';
import AddArticle from '../Pages/Articles/AddArticle';
import BlogDetail from '../Pages/Blogs/details';

const PublicLayout = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Routes>
				{/* Auth page */}
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />

				{/* Homepage */}
				<Route path="/" element={<Home />} />

        {/* Blog routes */}
        <Route path='/blog/create' element={<AddArticle />} />
        <Route path="/blog/list" element={<AllBlogs />} />
        <Route path="/blog/details/:id" element={<BlogDetail />} />

        {/* About us */}
        <Route path='/about' element={<AboutUs />} />

        {/* RoadMaps */}
        <Route path='/roadmap/mernstack' element={<Mernstack />} />
        <Route path='/roadmap/fullstack' element={<Fullstack />} />
        <Route path='/roadmap/frontend' element={<Frontend />} />
        <Route path='/roadmap/backend' element={<Backend />} />
        <Route path='/roadmap/ai-ml' element={<AIML />} />
        <Route path='/roadmap/cybersecurity' element={<Cybersecurity />} />

        {/* Contact us */}
        <Route path='/contact' element={<ContactUs />} />

        {/* Projecs */}
			</Routes>
		</Suspense>
	);
};

export default PublicLayout;
