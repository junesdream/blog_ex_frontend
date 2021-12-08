import React from "react";
import "./Snap.css";
// import { Context } from "../context/Context";
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { FaExclamationCircle } from 'react-icons/fa';

const Snap = ({ snap }) => {
	console.log("ein snap", snap);
	// const PF = "https://sorinori.herokuapp.com/images/";
	const PF = "https://sorinori.herokuapp.com/images/";
	// const { user } = useContext(Context);
	return (
		<div className="snapContainer">
			<div className="snap">
				{snap && (
					<>
						<img className="snapImg" src={PF + snap.photo} alt="" />
						<span className="snapTitle">{snap.title}</span>
						<p className="snapDesc">{snap.desc}</p>
						{/* <p className="snapUserName"> {user.username}</p> */}
					</>
				)}
			</div>
		</div>
	);
};

export default Snap;
