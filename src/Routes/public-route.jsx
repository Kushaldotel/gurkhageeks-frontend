import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Auth/Login';
import Signup from '../Pages/Auth/Signup';
import Home from '../Pages/Homepage';
import AllBlogs from '../Pages/Blogs/list';

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
        <Route path="/blogs" element={<AllBlogs />} />
			</Routes>
		</Suspense>
	);
};

export default PublicLayout;
