import React from "react";
import "./Impressum.css";

const Impressum = () => {
	return (
		<div className="impressumBox">
			<div className="impressumTitle">
				<h2>Impressum</h2>
				<div className="impressumContant">
					<p>Angaben gemäß § 5 TMG</p>
					<p>
						Sori Nori <br />
						Muster Str. 100
						<br />
						10969 Berlin <br />
					</p>
					<p>
						<strong>Vertreten durch: </strong> <br />
						Rainbow Rave
						<br />
					</p>
					<p>
						<strong>Kontakt:</strong> <br />
						Telefon: 01234-789456
						<br />
						Fax: 1234-56789
						<br />
						E-Mail: <p>info@sorinori.com</p> <br />
					</p>
					<p>
						<strong>Registereintrag: </strong>
						<br />
						Eintragung im Registergericht: Berlin
						<br />
						Registernummer: 12345
						<br />
					</p>
					<p>
						<strong>Umsatzsteuer-ID: </strong> <br />
						Umsatzsteuer-Identifikationsnummer gemäß §27a
						Umsatzsteuergesetz: Musterustid.
						<br />
						<br />
						<strong>Wirtschafts-ID: </strong>
						<br />
						Musterwirtschaftsid
						<br />
					</p>
					<p>
						<strong>Aufsichtsbehörde:</strong>
						<br />
						Musteraufsicht Berlin
						<br />
					</p>
					<br />
					Website Impressum von <span className="e-adresse"> <a href="https://www.sorinori.de">www.soinori.com</a> </span>
					
				</div>
			</div>
		</div>
	);
};

export default Impressum;
