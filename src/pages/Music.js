import React from 'react'
import "./Music.css";
// import { useState } from "react";
import Header from "../componants/Header";
// import Posts from "../componants/Posts";
import Sidebar from "../componants/Sidebar";
import TrackPlayer from "../componants/TrackPlayer";


const Music = () => {
    // const [posts, setPosts] = useState([]);
    return (
		<>
			<div>
				<Header />
				<TrackPlayer />
				<div className="music">
					<TrackPlayer />
					{/* <Posts posts={posts} /> */}

					<Sidebar />
				</div>
			</div>
		</>
	);
}


export default Music
