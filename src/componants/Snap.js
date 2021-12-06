import React from "react";
import "./Snap.css";
// import { Link } from "react-router-dom";
// import { FaExclamationCircle } from 'react-icons/fa';

const Snap = ({ snap }) => {
	console.log("ein snap", snap);
	const PF = "http://localhost:8030/images/";
	return (
		<div className="snapContainer">
			<div className="snap">
				{snap && (
					<>
						<img className="snapImg" src={PF + snap.photo} alt="" />
						<span className="snapTitle">{snap.title}</span>
						<p className="snapDesc">{snap.desc}</p>
					</>
				)}
			</div>
		</div>
	);
};

export default Snap;
