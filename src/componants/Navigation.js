import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FaMusic, FaSearchPlus } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../context/Context";

const Navigation = () => {
	const { user, dispatch } = useContext(Context);

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};

	return (
		<div className="navbar">
			<div className="navLeft">
				<FaMusic className="navIcon" />
			</div>
			<div className="navCenter">
				<ul className="navList">
					<li className="navListItem">
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					{/* <li className="topListItem">Storie</li>
					<li className="topListItem">Write</li>
					<li className="topListItem">Faces</li> */}

					<li className="navListItem">
						<Link to="/" className="link">
							Stories
						</Link>
					</li>
					<li className="navListItem">
						<Link to="/write" className="link">
							Write
						</Link>
					</li>
					<li className="navListItem">
						<Link to="/" className="link">
							Faces
						</Link>
					</li>
					<li className="navListItem" onClick={handleLogout}>
						{user && "LOGOUT"}
					</li>
				</ul>
			</div>
			<div className="navRight">
				{user ? (
					<Link to="/settings">
						<img
							className="navImg"
							src={user.profilePic}
							alt=""
						/>
					</Link>
				) : (
					<ul className="navList">
						<li className="navListItem">
							<Link to="/login" className="link">
								LOGIN
							</Link>
						</li>

						<li className="navListItem">
							<Link to="/register" className="link">
								REGISTER
							</Link>
						</li>
					</ul>
				)}
				<FaSearchPlus className="navSearchIcon" />
			</div>
		</div>
	);
};

export default Navigation;
