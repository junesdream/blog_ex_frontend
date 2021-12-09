import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
// import Contact from "../pages/footerpages/Contact";

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
					<li className="bottomListItem">
						<Link to="/contact">Contact</Link>
					</li>
					<li className="bottomListItem">
						<Link to="/impressum">Impressum</Link>
					</li>
					<li className="bottomListItem">
						<Link to="/about">About Us</Link>
					</li>
					{/* <li className="bottomListItem">
						<Link to="/mycalendar">Calendar</Link>
					</li> */}
					<li className="bottomListItem">
						<Link to="/kalendar">Calendar</Link>
					</li>
				</ul>
			</div>
			<div className="bottomRight">
				<p> &copy; Peace & Love 2021 </p>
			</div>
		</div>
	);
}

export default Footer
