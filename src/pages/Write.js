import React from "react";
import { useState, useContext } from "react";
import "./Write.css";
import { FaPhotoVideo } from "react-icons/fa";
import axios from "axios";
import { Context } from "../context/Context";
import { useHistory } from "react-router-dom";

const Write = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const { user } = useContext(Context);

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			desc,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			newPost.photo = filename;

			// console.log("data", file);
			// console.log("formmmm", data);
			// console.log("newPost", newPost);

			try {
				// await axios.post("https://sorinori.herokuapp.com/api/upload", data);
				await axios.post(
					"https://sorinori.herokuapp.com/api/upload",
					data
				);
				// await axios.post("/upload", data);
			} catch (err) {
				console.log("uploaderr:", err);
			}
		}

		try {
			const res = await axios.post(
				// "https://sorinori.herokuapp.com/api/posts",
				"https://sorinori.herokuapp.com/api/posts",
				newPost
			);
			// const res = await axios.post("/posts", newPost);
			console.log("res data id", res.data._id);
			console.log("test");
			// window.location.replace("/", +res.data._id);
		} catch (err) {
			console.log("posterr:", err);
		}

		// axios
		// .post("https://sorinori.herokuapp.com/api/upload", {data})
		// .then((res) => console.log(res))
		// .catch((err) => console.log(err));

		// 	axios
		// 		.post("https://sorinori.herokuapp.com/api/posts/new", newPost)
		// 		// .then((res) => console.log(res))
		// 		.then((res) => window.location.replace("/post/", +res.data._id))
		// 		.catch((err) => console.log(err));
		// }
		history.push("/");
	};

	return (
		<div className="write">
			<span className="writeTitleName">
				Any best portrait from the floor? &#9997;
			</span>
			{file && (
				<img
					className="wirteImg"
					src={URL.createObjectURL(file)}
					alt=""
				/>
			)}
			<form className="writeForm" onSubmit={handleSubmit}>
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<FaPhotoVideo className="writeIcon" />
						<i class="fas fa-camera fa-5x"></i>
					</label>
					<input
						type="file"
						id="fileInput"
						name="postpic"
						style={{ display: "none" }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<input
						type="text"
						placeholder="Title"
						autofocuse="true"
						className="writeInput"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="writeInput writeText"
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
				</div>
				<button className="writeSubmit" type="submit">
					Publish
				</button>
			</form>
		</div>
	);
};

export default Write;
