import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';

const PrivateLayout = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			{/* private page routes goes here... */}
		</Suspense>
	);
};

export default PrivateLayout;
