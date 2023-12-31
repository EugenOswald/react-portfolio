import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css';
import linkedin from '../../../../public/img/social/linkedin-dark.png';
import github from '../../../../public/img/social/github-dark.png';

function HeroSection() {
	const { t } = useTranslation();

	return (
		<section id='heroSection' className='heroSection'>
			<Container className='heroSection-container d-flex '>
				<Row className=''>
					<Col lg={6} className='d-flex order-2 order-lg-2  justify-content-center align-items-center flex-column'>
						<div className='d-flex justify-content-center flex-column text-center text-lg-start mb-5'>
							<p className='mb-1'>{t('heroSection.greeting')}</p>
							<h1 className='mb-1'>{t('heroSection.role')}</h1>
							<p className='mb-4'>{t('heroSection.description')}</p>
							<div className='d-flex flex-sm-row flex-column align-items-center justify-content-center justify-content-lg-start'>
								<Button variant='dark' className=' px-3 py-2'>
									{t('heroSection.contactMe')}
								</Button>
								<div className='mt-3 mt-sm-0'>
									<a className='ms-sm-4 me-3 me-sm-0 icon-link' href='https://www.linkedin.com/in/eugen-oswald/'>
										<img className='social-icon' src={linkedin} alt='' />
									</a>
									<a className=' ms-sm-3 icon-link' href='https://github.com/EugenOswald'>
										<img className='social-icon' src={github} alt='' />
									</a>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={6} className='d-flex order-1 order-lg-2 justify-content-center align-items-center flex-column'>
						<div className='d-flex justify-content-center justify-content-lg-end  w-100'>
							<img src='./img/hero_img.png' alt='Hero Section' className='img-fluid mb-4' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default HeroSection;
