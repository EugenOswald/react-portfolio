import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './Pages/Home/Navbar/PageNavbar';
import Home from './Pages/Home/Home';
import Footer from './Pages/Home/Footer/Footer';
import Datenschutz from './Pages/Datenschutz/Datenschutz';
import Impressum from './Pages/Impressum/Impressum';
import './App.css';

function App() {
	const location = useLocation();
	const showNavAndFooter = location.pathname !== '/datenschutz' && location.pathname !== '/impressum';

	return (
		<div className='App'>
					
					{showNavAndFooter && <PageNavbar />}
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='*' element={<div>404 Not Found</div>}></Route>
						<Route path='/datenschutz' element={<Datenschutz />}></Route>
						<Route path='/impressum' element={<Impressum />}></Route>{' '}
					</Routes>
					{showNavAndFooter && <Footer />}
				
		</div>
	);
}

export default App;
