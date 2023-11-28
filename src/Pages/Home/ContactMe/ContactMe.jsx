import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './ContactMe.css';

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Senden der Formulardaten an das PHP-Backend
		try {
			const response = await fetch('/send_mail.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log('Formular erfolgreich gesendet');
			} else {
				console.log('Fehler beim Senden des Formulars');
			}
		} catch (error) {
			console.error('Es gab ein Problem mit der fetch-Anfrage:', error);
		}
	};

	return (
		<section id='Contact' className='py-5 contact-section'>
			<Container>
				<Row className='justify-content-center'>
					<Col md={8} className='contact-form'>
						<p className='lead'>Nimm Kontakt auf</p>
						<h2>Kontaktiere mich</h2>
						<p>
							Ich freue mich darauf, von dir zu hören! Kontaktiere mich, und lass uns gemeinsam herausfinden, wie wir deine
							Vision verwirklichen können.
						</p>

						<Form onSubmit={handleSubmit} className='form-styled'>
							<Row className='my-2'>
								<Col md={6}>
									<Form.Group controlId='firstName'>
										<Form.Label>Vorname</Form.Label>
										<Form.Control type='text' required value={formData.firstName} onChange={handleChange} />
									</Form.Group>
								</Col>
								<Col md={6}>
									<Form.Group controlId='lastName'>
										<Form.Label>Nachname</Form.Label>
										<Form.Control type='text' required value={formData.lastName} onChange={handleChange} />
									</Form.Group>
								</Col>
							</Row>
							<Form.Group controlId='email' className='mb-2'>
								<Form.Label>Email</Form.Label>
								<Form.Control type='email' required value={formData.email} onChange={handleChange} />
							</Form.Group>
							<Form.Group controlId='phoneNumber' className='mb-2'>
								<Form.Label>Tel.Nummer</Form.Label>
								<Form.Control type='number' required value={formData.phoneNumber} onChange={handleChange} />
							</Form.Group>
							<Form.Group controlId='message' className='mb-2'>
								<Form.Label>Nachricht</Form.Label>
								<Form.Control
									as='textarea'
									rows={8}
									placeholder='Deine Nachricht...'
									value={formData.message}
									onChange={handleChange}
								/>
							</Form.Group>
							<Form.Group controlId='termsAccepted' className='mb-3'>
								<Form.Check
									type='checkbox'
									label='Ich akzeptiere die Nutzungsbedingungen.'
									required
									checked={formData.termsAccepted}
									onChange={handleChange}
								/>
							</Form.Group>
							<Button variant='primary' type='submit'>
								Absenden
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContactMe;
