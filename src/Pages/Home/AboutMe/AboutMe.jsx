import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BsFillBriefcaseFill, BsFillBookFill, BsDownload } from 'react-icons/bs';
import './AboutMe.css';
import advancedReactPdf from '../../../../public/pdfs/advanced-react.pdf';

const AboutMe = () => {
	const { t } = useTranslation();

	return (
		<section id='AboutMe' className='my-5 AboutMe'>
			<Container className='AboutMe-container'>
				<Row>
					<Col>
						<h2 className='aboutme-header lead fw-bold text-align-center mb-4'>{t('aboutMe.header')}</h2>
					</Col>
				</Row>
				<Row className='align-items-center'>
					<Col className='d-flex justify-content-center mb-4 mb-lg-0' lg={4}>
						<Image src='./img/comicEugen.png' alt='About Me' className='w-100 eugen-image' rounded />
					</Col>
					<Col lg={8}>
						<Row className='justify-content-center'>
							<Col md={6} className='p-0'>
								<Card className='mb-3  mx-3 about-me-card'>
									<Card.Body className='d-flex flex-row justify-content-start align-items-center'>
										<div>
											<Card.Title className='text-center'>{t('aboutMe.experience.title')}</Card.Title>
											<div className='d-flex align-items-center'>
												<BsFillBriefcaseFill size={30} className='mr-3' />
												<Card.Text className='mx-2 text-muted text-14'>{t('aboutMe.experience.years')}</Card.Text>
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
											<Card.Title className='text-center'>{t('aboutMe.certificates.title')}</Card.Title>
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
								<p className='text-muted'>{t('aboutMe.description')}</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default AboutMe;
