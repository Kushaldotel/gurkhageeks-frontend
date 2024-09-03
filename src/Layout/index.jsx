import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	console.log('running...')
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
