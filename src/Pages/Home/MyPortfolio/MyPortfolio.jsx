import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import data from '../../../data/index.json';
import './MyPortfolio.css';

export default function MyPortfolio() {
	return (
		<section id='MyPortfolio' className='py-5 MyPortfolio'>
			<Container className='MyPortfolio-container'>
				<Row className=''>
					<Col>
						<h2 className='myporfolio-header'>Mein Portfolio</h2>
					</Col>
				</Row>

				<Row className='mb-4'>
					<Col>
						<Button className='portfolio-card-button' href='https://github.com/yourusername' target='_blank'>
							Mein GitHub
						</Button>
					</Col>
				</Row>

				{data?.portfolio?.map((item, index) => (
					<Card key={index} className='mb-4 '>
						<Row className={`g-0 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
							<Col md={5}>
								<a className='img-hover' href={item.linkTest} target='_blank' rel='noopener noreferrer'>
									<Card.Img src={item.src} alt='Project' />
								</a>
							</Col>
							<Col md={6} className='d-flex align-items-center ms-3'>
								<Card.Body className='d-flex flex-column'>
									<Card.Title className='portfolio-card-title'>{item.title}</Card.Title>
									<Card.Title className='portfolio-card-language'>{item.language}</Card.Title>
									<Card.Text>{item.description}</Card.Text>
									<div className='mt-3'>
										<Button className='portfolio-card-button px-3 me-3' href={item.link} target='_blank'>
											GitHub
										</Button>
										<Button className='portfolio-card-button px-3 ' href={item.linkTest} target='_blank'>
											Live Test
										</Button>
									</div>
								</Card.Body>
							</Col>
						</Row>
					</Card>
				))}
			</Container>
		</section>
	);
}
