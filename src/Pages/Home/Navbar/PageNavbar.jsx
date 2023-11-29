import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageSwitcher from '../../../components/LanguageSwitcher/LanguageSwitcher';
import './PageNavbar.css';

const PageNavbar = () => {
	const { t } = useTranslation();

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
								{t('navbar.home')}
							</Link>
							<Link to='AboutMe' className='nav-link me-4'>
								{t('navbar.aboutMe')}
							</Link>
							<Link to='MyPortfolio' className='nav-link me-4'>
								{t('navbar.portfolio')}
							</Link>
						</Nav>
						<Nav className='d-flex align-items-center mb-3 mb-lg-0 me-lg-3 me-0'>
							<Link to='Contact' className='btn btn-outline-dark px-4 py-2'>
								{t('navbar.contactMe')}
							</Link>
						</Nav>
						<Nav className='d-flex align-items-center'>
							<LanguageSwitcher />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default PageNavbar;
