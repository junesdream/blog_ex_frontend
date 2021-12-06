import React from "react";
import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		// axios
		// 	.post("http://localhost:8030/api/auth/register", {
		// 		username,
		// 		email,
		// 		password,
		// 	})
		// 	.then((res) => console.log(res))
		// 	.catch((err) => console.log(err));
			
			
			setError(false);
			try {
			const res = await axios.post("http://localhost:8030/api/auth/register", {
				username,
				email,
				password,
			});
			res.data && window.location.replace("/login");
		} catch(err) {
			setError(true);
		}

	};

	return (
		<div className="registerContainer">
			<div className="register">
				<span className="registerTitle">Register</span>
				<form className="registerForm" onSubmit={handleSubmit}>
					<label>Username</label>
					<input
						type="text"
						className="registerInput"
						placeholder="Enter your Username..."
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label>Email</label>
					<input
						type="text"
						className="registerInput"
						placeholder="Enter your Email..."
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label>Password</label>
					<input
						type="password"
						className="registerInput"
						placeholder="Enter your password..."
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="registerButton" type="submit">
						Register{" "}
					</button>
				</form>
				<button className="registerLoginButton">
					<Link className="link" to="/login">
						Login
					</Link>
				</button>
				{error && (
					<span style={{ color: "red", marginTop: "10px" }}>
						Somthing happened wrong!
					</span>
				)}
			</div>
		</div>
	);
};

export default Register;
