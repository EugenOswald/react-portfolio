import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { BsFillBriefcaseFill, BsFillBookFill, BsDownload } from 'react-icons/bs';
import './AboutMe.css';
import advancedReactPdf from '../../../../public/pdfs/advanced-react.pdf';

const AboutMe = () => {
	return (
		<section id='AboutMe' className='my-5 AboutMe'>
			<Container className='AboutMe-container'>
				<Row>
					<h2 className='lead fw-bold text-align-center mb-4'>Über Mich</h2>
				</Row>
				<Row className='align-items-center'>
					<Col lg={5}>
						<Image src='./img/about-me.png' alt='About Me' className='w-100' rounded />
					</Col>
					<Col lg={7}>
						<Row className='justify-content-center'>
							<Col md={6}>
								<Card className='mb-3  mx-3 about-me-card'>
									<Card.Body className='d-flex flex-row justify-content-start align-items-center'>
										<div>
											<Card.Title className='text-center'>Erfahrungen</Card.Title>
											<div className='d-flex align-items-center'>
												<BsFillBriefcaseFill size={30} className='mr-3' />
												<Card.Text className='mx-2 text-muted'>1+ year</Card.Text>
												<Card.Text>Frontend Development</Card.Text>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col md={6}>
								<Card className='mb-3  mx-3 about-me-card'>
									<Card.Body className='d-flex flex-row justify-content-start align-items-center'>
										<div>
											<Card.Title className='text-center'>Zertifikate</Card.Title>
											<div className='d-flex align-items-center'>
												<BsFillBookFill size={30} className='mr-3' />
												<div className='ms-2'>
													<Card.Text>
														PSM 1 - Scrum Master
														<a className='ms-2' href={advancedReactPdf} download>
															<BsDownload className='ml-2 download-icon' />
														</a>
													</Card.Text>
													<Card.Text>
														Advanced React - Meta
														<a className='ms-2' href={advancedReactPdf} download>
															<BsDownload className='ml-2 download-icon' />
														</a>
													</Card.Text>
												</div>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</Row>
						<div>
							<p className='text-muted'>
								Ich bin ein engagierter Frontend-Entwickler, spezialisiert auf JavaScript, React und Angular. Meine Arbeit
								und Freizeit widme ich innovativen Projekten und der stetigen Erweiterung meiner Fähigkeiten.
							</p>
							<p className='text-muted'>
								Meine Fachkenntnisse werden durch Zertifikate in 'Advanced React' und 'React Basics' von Meta sowie durch
								meine Qualifikation als Professional Scrum Master von Scrum.org unterstrichen.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default AboutMe;
