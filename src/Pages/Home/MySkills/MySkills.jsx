import data from '../../../data/index.json';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './MySkills.css';

const MySkills = () => {
	const { t } = useTranslation();
	return (
		<section className='my-skills' id='mySkills'>
			<Container fluid className='my-skills-containter'>
				<Row>
					<Col>
						<h2 className='skill-header'>{t('mySkills.title')}</h2>
					</Col>
				</Row>

				<Row className='d-flex justify-content-center'>
					{data?.skills?.map((item, index) => (
						<Col key={index} xs={6} md={4} lg={3} xl={2}>
							<Card className='mb-4'>
								<div className='img-bg mt-4'>
									<Card.Img variant='top' src={item.src} alt={item.title} />
								</div>
								<Card.Body className='my-2'>
									<Card.Title className='card-name'>{item.title}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default MySkills;
