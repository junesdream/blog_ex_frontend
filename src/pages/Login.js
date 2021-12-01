import React from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./Login.css";

const Login = () => {
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });

	
		axios
			.post("http://localhost:8030/api/auth/login", {
				username: userRef.current.value,
				password: passwordRef.current.value,
			})
			.then((res) => {
				console.log(res);
				dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				console.log(err);
				dispatch({ type: "LOGIN_FAILURE" });
			});
		// try {
		// 	const res = await axios.post("http://localhost:8030/api/auth/login", {
		// 		username: userRef.current.value,
		// 		password: passwordRef.current.value,
		// 	})
		// 	dispatch({ type:"LOGIN_SUCCESS", payload:res.data });
		// } catch(err) {
		// 	dispatch({ type: "LOGIN_FAILURE" });
		// }
	};

	return (
		<div className="loginContainer">
			<div className="login">
				<span className="loginTitle">Login</span>
				<form className="loginForm" onSubmit={handleSubmit}>
					<label>Username</label>
					<input
						type="text"
						className="loginInput"
						placeholder="Enter your Username..."
						ref={userRef}
					/>
					<label>Password</label>
					<input
						type="password"
						className="loginInput"
						placeholder="Enter your password..."
						ref={passwordRef}
					/>
					<button
						className="loginButton"
						type="submit"
						disabled={isFetching}
					>
						Login
					</button>
				</form>
				<button className="loginRegisterButton">
					<Link className="link" to="/register">
						Register
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Login;
