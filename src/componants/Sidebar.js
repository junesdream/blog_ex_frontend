import React from "react";
import "./Sidebar.css";
import {
	FaFacebookSquare,
	FaLinkedin,
	FaGithubSquare,
	FaInstagramSquare,
} from "react-icons/fa";
import Aboutme from "../Images/Aboutme.jpeg";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get("http://localhost:8030/api/categories");
			// const res = await axios.get("/categories");
			setCats(res.data);
		};
		getCats();
	}, []);
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle"> ABOUT ME </span>
				<br />
				<img className="sidebarImg" src={Aboutme} alt="smile" />
				<p>
					Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum
					dolor sit amet, con
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle"> CATEGORIES </span>
				<ul className="sidebarList">
					{/* {cats.map((c) => (
						<Link to={`/?cat=${c.name}`} className="link">
							<li className="sidebarListItem">{c.name}</li>
						</Link> */}
					{cats.map((c, index) => (
						<Link
							key={index}
							to={`/?cat=${c.name}`}
							className="link"
						>
							<li className="sidebarListItem">{c.name}</li>
						</Link>
					))}
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle"> FOLLOW US </span>
				<div className="sidebarSocial">
					<FaFacebookSquare className="sidebarIcon" />
					<FaLinkedin className="sidebarIcon" />
					<FaGithubSquare className="sidebarIcon" />
					<FaInstagramSquare className="sidebarIcon" />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
