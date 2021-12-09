import React from "react";
import "./About.css";
import Nori from "../../componants/images/Nori.jpg";
import Sori from "../../componants/images/Sori.jpg";
import Drmoon from "../../componants/images/Drmoon.jpg";
import Mizgold from "../../componants/images/Mizgold.jpg";
import Queensy from "../../componants/images/Queensy.jpg";
import Redbilly from "../../componants/images/Redbilly.jpg";

const AboutUs = () => {
	return (
		<div className="aboutContainer">
			<p className="aboutContainerTitle"> Who we are?</p>

			<div className="aboutTop">
				<div className="nori">
					<u className="crewName">Nori:</u> <br />
					<img src={Nori} alt="nori" />
					<span className="crewTitle">
						<br /> Chief editor & Sound <br /> Cheers!
					</span>
				</div>
				<div className="sori">
					<u className="crewName">Sori:</u> <br />
					<img src={Sori} alt="sori" />
					<span className="crewTitle">
						<br /> Managing & Social <br />
						Voila!
					</span>
				</div>
				<div className="drmoon">
					<u className="crewName">Dr.Moon:</u> <br />
					<img style={{ width: "100%" }} src={Drmoon} alt="drmoon" />
					<span className="crewTitle">
						<br /> Attorney & Columnist <br />
						Power!
					</span>
				</div>
			</div>
				<div className="aboutDown">
					<div className="mizgold">
						<u className="crewName">Mizgold:</u> <br />
						<img src={Mizgold} alt="mizgold" />
						<span className="crewTitle">
							<br /> Chief Reporter & Social <br /> Charm!
						</span>
					</div>
					<div className="queensy">
						<u className="crewName">Queensy:</u> <br />
						<img src={Queensy} alt="queensy" />
						<span className="crewTitle">
							<br /> Beats & Groove <br /> Ahoi!
						</span>
					</div>
					<div className="redbilly">
						<u className="crewName">Redbilly:</u> <br />
						<img src={Redbilly} alt="redbilly" />
						<span className="crewTitle">
							<br /> Voice & Music <br /> Yeah!
						</span>
					</div>
				</div>
			
		</div>
	);
};

export default AboutUs;
