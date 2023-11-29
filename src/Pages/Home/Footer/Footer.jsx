import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<footer>
			<Container className='d-flex align-items-center justify-content-end'>
				<Row>
					<Col>
						<Nav className=''>
							<Nav.Item className='me-4'>
								<Link className='footer-link' to='impressum' onClick={scrollToTop}>
									Impressum
								</Link>
							</Nav.Item>
							<Nav.Item>
								<Link className='footer-link' to='datenschutz' onClick={scrollToTop}>
									Datenschutz
								</Link>
							</Nav.Item>
						</Nav>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
