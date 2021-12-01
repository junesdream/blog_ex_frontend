import React from "react";
import axios from "axios";
import "./SinglePost.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useLocation } from "react-router";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const SinglePost = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const PF = "http://localhost:8030/images/";
	const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

	console.log("user", user);
	//nach dem { user } mit useContext konnte Data nicht validiert werden wie z.B. Edit und Trash icons sind nicht mehr siehtbar.
	useEffect(() => {
		const getPost = async () => {
			// const res = await axios.get("/posts/" + path);
			console.log("path", path);
			const res = await axios.get(
				"http://localhost:8030/api/posts/" + path
			);
			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};
		getPost();
	}, [path]);

	const handleDelete = async () => {
		try {
			await axios.delete("http://localhost:8030/api/posts/" + path, {
				data: { username: user.username },
			});
			window.location.replace("/");
		} catch (err) {}

		// axios
		// .delete(`/posts/${post._id}`, {
		// 	data: { username: user.username },
		// })
		// .then((res) => window.location.replace("/"))
		// .catch((err) => console.log(err));
	};

	const handleUpdate = async () => {
		try {
			await axios.put("http://localhost:8030/api/posts/" + path, {
				username: user.username,
				title,
				desc,
			});
			setUpdateMode(false);
		} catch (err) {}
	};

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.photo && (
					<img
						src={PF + post.photo}
						alt=""
						className="singlePostImg"
					/>
				)}
				{updateMode ? (
					<input
						type="text"
						value={title}
						className="singlePostTitleInput"
						autoFocus
						onChange={(e) => setTitle(e.target.value)}
					/>
				) : (
					<h1 className="singlePostTitle">
						{title}
						{post.username === user?.username && (
							<div className="singlePostEdit">
								<FaEdit
									className="singlePostIcon1"
									onClick={() => setUpdateMode(true)}
								/>

								<FaTrashAlt
									className="singlePostIcon2"
									onClick={handleDelete}
								/>
							</div>
						)}
					</h1>
				)}
				<div className="singlePostInfo">
					<span className="singlePostAutor">
						Author:
						<Link to={`/?user=${user.username}`} className="link">
							<b>{user.username}</b>
						</Link>
					</span>
					<span className="singlePostDate">
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>

				{updateMode ? (
					<textarea
						className="singlePostDescInput"
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				) : (
					<p className="singlePostDesc">{desc}</p>
				)}
				{updateMode && (
					<button className="singlePostButton" onClick={handleUpdate}>
						Update
					</button>
				)}
			</div>
		</div>
	);
};

export default SinglePost;
