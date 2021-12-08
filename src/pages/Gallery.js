import React from "react";
import { useEffect, useState } from "react";
import "./Gallery.css";
// import { useLocation } from "react-router";
import Header from "../componants/Header";
import Snaps from "../componants/Snaps";
import Sidebar from "../componants/Sidebar";
import axios from "axios";

// async function getData() {
// 	const data = await axios.get("https://sorinori.herokuapp.com/api/snaps")
// 	.TouchEvent(promise => {
// 		return promise.data;
// 	})
// 	catch(e => {
// 		console.error(e)
// 	})
// 	return data;
// }

const Gallary = () => {
	const [snaps, setSnaps] = useState([null]);
	// const { search } = useLocation();
	useEffect(() => {
		axios
			.get("https://sorinori.herokuapp.com/api/snaps")
			.then((res) => setSnaps(res.data))
			.catch((err) => console.log(err));
	}, []);

	// useEffect(() => {
	// 	const getPost = async () => {
	// 		// await axios
	// 		// 	.get("https://sorinori.herokuapp.com/api/snaps")
	// 		// 	.then((res) => setPosts(res.data))
	// 		// 	.catch((err) => console.log(err));
	// 		const updatePosts = async () => {
	// 			const newData = await getData;
	// 			setPosts(newData);
	// 		}
	// 	};
	// 	updatePosts();
	// }, []);

	return (
		<>
			<Header />
			<span className="galleryTitle">
				&hearts; Best Faces from the Floor &hearts;
			</span>
			<div className="gallery">
				{/* <Snaps className="snapsDemo" snaps={snaps} /> */}
				<Snaps snaps={snaps} />
				{/* <Sidebar className="sidebarGallery" /> */}
				{/* <Sidebar /> */}
				<Sidebar />
			</div>
		</>
	);
};

export default Gallary;
