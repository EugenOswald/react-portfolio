import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
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
	const { t } = useTranslation();
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
		saveToLocalStorage('formSentCount', newCount, 60);
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
			setSubmitStatus({ success: false, message: t('contact.invalidEmail') });
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
				setSubmitStatus({ success: true, message: t('contact.formSuccesses') });
				updateFormSentCount();
			} else {
				setSubmitStatus({ success: false, message: t('contact.formError') });
			}
		} catch (error) {
			setSubmitStatus({ success: false, message: `${t('contact.fetchError')}: ${error}` });
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id='Contact' className='py-5 contact-section'>
			<Container>
				<Row className='justify-content-center'>
					<Col md={8} className='contact-form'>
						<p className='lead'>{t('contact.intro')}</p>
						<h2>{t('contact.title')}</h2>
						<p>{t('contact.intro')}</p>

						{formVisible ? (
							<>
								{submitStatus && (
									<Alert className='my-2' variant={submitStatus.success ? 'success' : 'danger'}>
										{submitStatus.message}
									</Alert>
								)}
								<Form onSubmit={handleSubmit} className='form-styled'>
									<Row className='my-2'>
										<Col md={6}>
											<Form.Group controlId='firstName'>
												<Form.Label>{t('contact.firstName')}</Form.Label>
												<Form.Control type='text' required value={formData.firstName} onChange={handleChange} />
											</Form.Group>
										</Col>
										<Col md={6}>
											<Form.Group controlId='lastName'>
												<Form.Label>{t('contact.lastName')}</Form.Label>
												<Form.Control type='text' required value={formData.lastName} onChange={handleChange} />
											</Form.Group>
										</Col>
									</Row>
									<Form.Group controlId='email' className='mb-2'>
										<Form.Label>{t('contact.email')}</Form.Label>
										<Form.Control type='email' required value={formData.email} onChange={handleChange} />
									</Form.Group>
									<Form.Group controlId='phoneNumber' className='mb-2'>
										<Form.Label>{t('contact.phoneNumber')}</Form.Label>
										<Form.Control type='number' required value={formData.phoneNumber} onChange={handleChange} />
									</Form.Group>
									<Form.Group controlId='message' className='mb-2'>
										<Form.Label>{t('contact.message')}</Form.Label>
										<Form.Control
											as='textarea'
											rows={8}
											placeholder={t('contact.messageplaceholder')}
											value={formData.message}
											onChange={handleChange}
										/>
									</Form.Group>
									<Form.Group controlId='termsAccepted' className='mb-3'>
										<Form.Check
											type='checkbox'
											label={t('contact.termsAcceptance')}
											required
											checked={formData.termsAccepted}
											onChange={handleChange}
										/>
									</Form.Group>
									<Button className='submit-btn' variant='primary' type='submit' disabled={isSubmitting}>
										{isSubmitting ? t('contact.submitting') : t('contact.submit')}
									</Button>
								</Form>{' '}
							</>
						) : (
							<Alert variant='success' className='my-4'>
								{t('contact.formSuccess')}
							</Alert>
						)}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContactMe;
