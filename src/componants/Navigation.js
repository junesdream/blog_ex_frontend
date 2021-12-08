import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FaSearchPlus } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../context/Context";
import Logo from "../componants/images/Logo.png";

const Navigation = () => {
	const { user, dispatch } = useContext(Context);
	// const PF = "https://sorinori.herokuapp.com/images/";
	const PF = "https://sorinori.herokuapp.com/images/";
	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};

	return (
		<div className="navbar">
			<div className="navLeft">
				{/* <FaMusic className="navIcon" /> */}
				<img className="navLogo" src={Logo} alt="logo" />
				<div className="navLogoTag">
					<span>소리</span>
					<span>노리</span>
				</div>
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

					{/* neue Versuch warte! */}

					{/* <li className="navListItem">
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
					</li> */}

					<li className="navListItem">
						<Link to="/write" className="link">
							Write
						</Link>
					</li>
					<li className="navListItem">
						<Link to="/snaps" className="link">
							Snaps
						</Link>
					</li>
					<li className="navListItem">
						<Link to="/gallery" className="link">
							Gallery
						</Link>
					</li>

					<li className="navListItem">
						<Link to="/music" className="link">
							Music
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
							src={PF + user.profilePic}
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
