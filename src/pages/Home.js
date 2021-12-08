import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
// import { useLocation } from "react-router";
import Header from "../componants/Header";
import Posts from "../componants/Posts";
import Sidebar from "../componants/Sidebar";
import axios from "axios";

const Home = () => {
	const [posts, setPosts] = useState([]);
	// const { search } = useLocation();
	useEffect(() => {
		axios
			.get("https://sorinori.herokuapp.com/api/posts")
			// .then((res) => setPosts(res.data))
			.then((res) => {
				setPosts(res.data);
			})
			.catch((err) => console.log(err));
		// const fetchPosts = async () => {
		// 	const res = await axios.get("https://sorinori.herokuapp.com/api/posts'");
		// 	setPosts(res.data);
		// };
		// fetchPosts();
		// console.log(posts);
	}, []);

	// const location = useLocation();
	// console.log(location);
	return (
		<>
			<Header />

			<div className="home">
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;
