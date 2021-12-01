import React from "react";
import "./Settings.css";
import Sidebar from "../componants/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

const Settings = () => {
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [success, setSuccess] = useState(false);

	const { user } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password,
		};

		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePic = filename;

			// console.log("data", file);
			// console.log("formmmm", data);
			// console.log("newPost", newPost);

			try {
				  await axios.post("http://localhost:8030/api/upload", data);
				// await axios.post("/upload", data);
				} catch (err) {
					// console.log("uploaderr:", err)
				}
			}
			try {
				await axios.put("http://localhost:8030/api/users/" +user._id, updatedUser);
				// const res = await axios.post("/users/" +user._id);
				setSuccess(true);
			} catch (err) {
				// console.log("posterr:", err);
			}
		};

	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">
						{" "}
						Update Your Account{" "}
					</span>
					<span className="settingsDeleteTitle"> Delete Account</span>
				</div>
				<form className="settingsForm" onSubmit={handleSubmit}>
					<label> Profile Pictur</label>
					<div className="settingsPP">
						<img src={user.profilePic} alt="" />
						<label htmlFor="fileInput">
							<FaUserCircle className="settingsPPIcon" />
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
					<label> Username </label>
					<input
						type="text"
						placeholder={user.username}
						onChange={(e) => setUsername(e.target.value)}/>
					<label> Email</label>
					<input
						type="email"
						placeholder={user.email}
						onChange={(e) => setEmail(e.target.value)}/>
					<label>Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}/>
					<button className="settingsSumit" type="submit"> Update</button>
				{success && <span style={{color:"green", textAlign:"center", marginTop:"20px"}}> Profile has been updated...</span>}
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;
