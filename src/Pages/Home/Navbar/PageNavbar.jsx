import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './PageNavbar.css';

import React from 'react';

const PageNavbar = () => {
	return (
		<>
			<Navbar
				className='bg-body-tertiary navbar-container'
				collapseOnSelect
				expand='lg'
				fixed='top'
				style={{ minHeight: '100px', padding: '10px' }}
			>
				<Container>
					<Navbar.Brand href='#'>Eugen Oswald</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='ms-5 me-auto'>
							<Link to='heroSection' className='nav-link me-4'>
								Home
							</Link>
							<Link to='AboutMe' className='nav-link me-4'>
								Über Mich
							</Link>
							<Link to='MyPortfolio' className='nav-link me-4'>
								Portfolio
							</Link>
						</Nav>
						<Nav>
							<Link to='Contact' className='btn btn-outline-dark px-4 py-2'>
								Kontaktiere mich
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default PageNavbar;
