import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './ContactMe.css';

const saveToLocalStorage = (key, value, expirationInMinutes) => {
	const now = new Date();
	const item = {
		value: value,
		expiry: now.getTime() + expirationInMinutes * 60000,
	};
	localStorage.setItem(key, JSON.stringify(item));
};

const getFromLocalStorage = (key) => {
	const itemStr = localStorage.getItem(key);
	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);
	const now = new Date();
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key);
		return null;
	}
	return item.value;
};

const ContactMe = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		message: '',
		termsAccepted: false,
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const [formSentCount, setFormSentCount] = useState(0);
	const [formVisible, setFormVisible] = useState(true);

	useEffect(() => {
		// Lade den Zähler aus dem localStorage beim Start
		const count = getFromLocalStorage('formSentCount');
		const countValue = count ? parseInt(count) : 0;
		setFormSentCount(countValue);
		if (countValue >= 2) {
			setFormVisible(false);
		}
	}, []);


	const updateFormSentCount = () => {
		const newCount = formSentCount + 1;
		setFormSentCount(newCount);
		saveToLocalStorage('formSentCount', newCount, 1);
		if (newCount >= 2) {
			setFormVisible(false);
		}
	};

	const isEmailValid = (email) => {
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email);
	};

	const handleChange = (e) => {
		const { id, value, type, checked } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[id]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!isEmailValid(formData.email)) {
			setSubmitStatus({ success: false, message: 'Ungültige E-Mail-Adresse.' });
			return;
		}

		setIsSubmitting(true);
		try {
			const response = await fetch('/send_mail.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSubmitStatus({ success: true, message: 'Formular erfolgreich gesendet.' });
				updateFormSentCount();
			} else {
				setSubmitStatus({ success: false, message: 'Fehler beim Senden des Formulars.' });
			}
		} catch (error) {
			setSubmitStatus({ success: false, message: `Es gab ein Problem mit der fetch-Anfrage: ${error}` });
		} finally {
			setIsSubmitting(false);
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

						{formVisible ? (
							<>
								{submitStatus && (
									<Alert variant={submitStatus.success ? 'success' : 'danger'}>{submitStatus.message}</Alert>
								)}
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
									<Button variant='primary' type='submit' disabled={isSubmitting}>
										{isSubmitting ? 'Sendet...' : 'Absenden'}
									</Button>
								</Form>{' '}
							</>
						) : (
							<Alert variant='success'>
								Das Formular wurde erfolgreich gesendet. <br />
								<strong>Hinweis:</strong> Du hast die maximale Anzahl an zulässigen Einsendungen erreicht. Bitte warte eine
								Weile, bevor du das Formular erneut absendest.
							</Alert>
						)}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContactMe;
