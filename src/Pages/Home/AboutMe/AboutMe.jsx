import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { BsFillBriefcaseFill, BsFillBookFill, BsDownload } from 'react-icons/bs';
import './AboutMe.css';
import advancedReactPdf from '../../../../public/pdfs/advanced-react.pdf';

const AboutMe = () => {
	return (
		<section id='AboutMe' className='my-5 AboutMe'>
			<Container className='AboutMe-container'>
				<Row>
					<Col>
						<h2 className='aboutme-header lead fw-bold text-align-center mb-4'>Über Mich</h2>
					</Col>
				</Row>
				<Row className='align-items-center'>
					<Col lg={4}>
						<Image src='./img/about-me.png' alt='About Me' className='w-100' rounded />
					</Col>
					<Col lg={8}>
						<Row className='justify-content-center'>
							<Col md={6} className='p-0'>
								<Card className='mb-3  mx-3 about-me-card'>
									<Card.Body className='d-flex flex-row justify-content-start align-items-center'>
										<div>
											<Card.Title className='text-center'>Erfahrungen</Card.Title>
											<div className='d-flex align-items-center'>
												<BsFillBriefcaseFill size={30} className='mr-3' />
												<Card.Text className='mx-2 text-muted text-14'>1+ Jahr</Card.Text>
												<Card.Text className='text-14'>Frontend Development</Card.Text>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col md={6} className='p-0'>
								<Card className='mb-3 mx-3 p-0 about-me-card'>
									<Card.Body className='d-flex flex-row justify-content-start align-items-center'>
										<div>
											<Card.Title className='text-center'>Zertifikate</Card.Title>
											<div className='d-flex align-items-center'>
												<BsFillBookFill size={30} className='mr-3' />
												<div className='ms-2'>
													<Card.Text className='text-14'>
														PSM 1 - Scrum Master
														<a className='ms-2' href={advancedReactPdf} download>
															<BsDownload className='ml-2 download-icon' />
														</a>
													</Card.Text>
													<Card.Text className='text-14'>
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
						<Row>
							<Col className='p-4'>
								<p className='text-muted'>
									Hi, ich bin Eugen, ein passionierter Frontend-Entwickler mit Fokus auf JavaScript, React und Angular.
									Meine Leidenschaft gilt der Entwicklung innovativer Webanwendungen. In meiner Freizeit widme ich mich
									kreativen Projekten und dem kontinuierlichen Erlernen neuer Technologien, um meine Fähigkeiten stets zu
									erweitern und auf dem neuesten Stand zu bleiben.
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default AboutMe;
