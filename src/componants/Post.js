import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
// import { FaExclamationCircle } from 'react-icons/fa';

const Post = ({ post }) => {
	// console.log("post", post);
	const PF = "https://sorinori.herokuapp.com/images/";
	return (
		<div className="postContainer">
			<div className="post">
				{post.photo && (
					<img className="postImg" src={PF + post.photo} alt="" />
				)}
				<div className="postInfo">
					<div className="postCats">
						{post.categories.map((c) => (
							<span className="postCat">{c.name}</span>
						))}
					</div>
					<Link to={`/post/${post._id}`} className="link">
						<span className="postTitle">{post.title}</span>
					</Link>
					<hr />
					<span className="postDate">
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				<p className="postDesc">{post.desc}</p>
			</div>
		</div>
	);
};

export default Post;
