import data from '../../../data/index.json';
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './MySkills.css';

const MySkills = () => {
	return (
		<section className='my-skills' id='mySkills'>
			<Container fluid className='my-skills-containter'>
				<Row>
					<Col>
						<p>My Skills</p>
						<h2>My Expertise</h2>
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
