import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './ContactMe.css'

const ContactMe = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
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
		<section id='Contact' className='py-5 contact-section'>
			<Container>
				<Row className='justify-content-center'>
					<Col md={8} className='contact-form'>
						<p className='lead'>Get In Touch</p>
						<h2>Contact Me</h2>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.</p>

						<Form onSubmit={handleSubmit} className='form-styled'>
							<Row className='my-2'>
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
							<Form.Group controlId='email' className='mb-2'>
								<Form.Label>Email</Form.Label>
								<Form.Control type='email' required value={formData.email} onChange={handleChange} />
							</Form.Group>
							<Form.Group controlId='phoneNumber' className='mb-2'>
								<Form.Label>Phone Number</Form.Label>
								<Form.Control type='number' required value={formData.phoneNumber} onChange={handleChange} />
							</Form.Group>
							<Form.Group controlId='message' className='mb-2'>
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
