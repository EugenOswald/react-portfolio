import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ContactMe = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		topic: '',
		message: '',
		termsAccepted: false,
	});

	const handleChange = (e) => {
		const { id, value, type, checked } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[id]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Hier könntest du die Formulardaten an einen Server senden oder weiter verarbeiten
		console.log('Form Data:', formData);
	};

	return (
		<section id='Contact' className='py-5'>
			<Container>
				<Row className='justify-content-center'>
					<Col md={8}>
						<p className='lead'>Get In Touch</p>
						<h2>Contact Me</h2>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.</p>

						<Form onSubmit={handleSubmit}>
							<Row>
								<Col md={6}>
									<Form.Group controlId='firstName'>
										<Form.Label>First Name</Form.Label>
										<Form.Control type='text' required value={formData.firstName} onChange={handleChange} />
									</Form.Group>
								</Col>
								<Col md={6}>
									<Form.Group controlId='lastName'>
										<Form.Label>Last Name</Form.Label>
										<Form.Control type='text' required value={formData.lastName} onChange={handleChange} />
									</Form.Group>
								</Col>
							</Row>
							<Form.Group controlId='email'>
								<Form.Label>Email</Form.Label>
								<Form.Control type='email' required value={formData.email} onChange={handleChange} />
							</Form.Group>
							<Form.Group controlId='phoneNumber'>
								<Form.Label>Phone Number</Form.Label>
								<Form.Control type='number' required value={formData.phoneNumber} onChange={handleChange} />
							</Form.Group>
							<Form.Group controlId='topic'>
								<Form.Label>Choose a topic</Form.Label>
								<Form.Select value={formData.topic} onChange={handleChange}>
									<option>Select One...</option>
									<option value='item1'>Item 1</option>
									<option value='item2'>Item 2</option>
									<option value='item3'>Item 3</option>
								</Form.Select>
							</Form.Group>
							<Form.Group controlId='message'>
								<Form.Label>Message</Form.Label>
								<Form.Control
									as='textarea'
									rows={8}
									placeholder='Type your message...'
									value={formData.message}
									onChange={handleChange}
								/>
							</Form.Group>
							<Form.Group controlId='termsAccepted' className='mb-3'>
								<Form.Check
									type='checkbox'
									label='I accept the terms'
									required
									checked={formData.termsAccepted}
									onChange={handleChange}
								/>
							</Form.Group>
							<Button variant='primary' type='submit'>
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContactMe;
