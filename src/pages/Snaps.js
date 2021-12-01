import React from 'react'
import { useState, useContext } from "react";
import "./Snaps.css";
import { FaPhotoVideo } from "react-icons/fa";
import axios from "axios";
import { Context } from "../context/Context";

const Snaps = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const { user } = useContext(Context);

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
				await axios.post("http://localhost:8030/api/upload", data);
				// await axios.post("/upload", data);
			} catch (err) {
				console.log("uploaderr:", err);
			}
		}

		try {
			const res = await axios.post(
				"http://localhost:8030/api/posts",
				newPost
			);
			// const res = await axios.post("/posts", newPost);
			console.log("res data id", res.data._id);
			console.log("test");
			window.location.replace("/post/", +res.data._id);
            // window.location.redirect("/post/", +res.data._id);
		} catch (err) {
			console.log("posterr:", err);
		}

		// axios
		// .post("http://localhost:8030/api/upload", {data})
		// .then((res) => console.log(res))
		// .catch((err) => console.log(err));

		// 	axios
		// 		.post("http://localhost:8030/api/posts/new", newPost)
		// 		// .then((res) => console.log(res))
		// 		.then((res) => window.location.replace("/post/", +res.data._id))
		// 		.catch((err) => console.log(err));
		// }
	};

	return (
		<div className="write">
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
						placeholder="Your comment..."
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

export default Snaps;
