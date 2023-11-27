import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';

const Impressum = () => {
	return (
		<Container>
			<Row>
				<Col className='mt-5'>
					<Nav>
						<Nav.Item>
							<Link className='back-icon-link' to='/'>
								<BsArrowLeftCircleFill className='back-icon' />
							</Link>
						</Nav.Item>
					</Nav>
					<div className='impressum'>
						<h1>Impressum</h1>
						<p>Angaben gemäß § 5 TMG</p>
						<br />
						<p>
							Eugen Oswald <br />
							Rheintalstraße 38
							<br />
							65199 Wiesbaden <br />
						</p>
						<p>
							<br /> <strong>Vertreten durch: </strong>
							<br />
							Eugen Oswald
							<br />
						</p>
						<p>
							<br />
							<strong>Kontakt:</strong> <br />
							Telefon: +49-01724306200
							<br />
							E-Mail: <a href='mailto:oswaldeugen95@gmail.com'>oswaldeugen95@gmail.com</a>
						</p>
						<p>
							<br />
							<strong>Haftungsausschluss: </strong>
							<br />
							<br />
							<strong>Haftung für Links</strong>
							<br />
							<br />
							Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
							können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
							stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
							Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
							Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
							Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
							derartige Links umgehend entfernen.
							<br />
							<br />
							<strong>Datenschutz</strong>
							<br />
							<br />
							Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren
							Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt
							dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht
							an Dritte weitergegeben. <br />
							Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
							Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
							möglich. <br />
							Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
							nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
							Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
							Werbeinformationen, etwa durch Spam-Mails, vor.
							<br />
						</p>
						<p>
							Impressum vom <a href='https://www.impressum-generator.de'>Impressum Generator</a> der{' '}
							<a href='https://www.kanzlei-hasselbach.de/standorte/frankfurt/' rel='nofollow'>
								Kanzlei Hasselbach, Frankfurt
							</a>
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Impressum;
