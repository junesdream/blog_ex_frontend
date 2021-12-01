import React from 'react'
import "./Footer.css";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
		<div className="footer">
			<div className="bottomLeft">
				<FaFacebookSquare className="bottomIcon" />
				<FaLinkedin className="bottomIcon" />
				<FaGithubSquare className="bottomIcon" />
				<FaInstagramSquare className="bottomIcon" />
			</div>
			<div className="bottomCenter">
				<ul className="bottomList">
					<li className="bottomListItem">Contact</li>
					<li className="bottomListItem">Impressum</li>
					<li className="bottomListItem">About us</li>
					<li className="bottomListItem">FAQ</li>
				</ul>
			</div>
			<div className="bottomRight">
				  <p> &copy; Peace & Love 2021 </p>
			</div>
		</div>
	);
}

export default Footer
