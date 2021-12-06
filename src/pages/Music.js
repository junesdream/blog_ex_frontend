import React from "react";
import "./Music.css";
// import { useState } from "react";
import Header from "../componants/Header";
// import Posts from "../componants/Posts";
// import Sidebar from "../componants/Sidebar";
import TrackPlayer from "../componants/mutools/TrackPlayer";
import Boxen from "../componants/images/Boxen.png";
import DrMachine from "../componants/mutools/DrMachine";
import Tpod from "../componants/tpod/Tpod";
// import BpmDetector from "../componants/MuTools/BpmDetector";


const Music = () => {
	// const [posts, setPosts] = useState([]);
	return (
		<>
			<div className="musicContainer">
				<Header />
				<div className="playerContainer">
					<h2> Listen new Tracks</h2>
					<img className="listenImg" src={Boxen} alt="smile" />
				</div>
				<div className="trackPlayer">
					<TrackPlayer />
				</div>

				<div className="drmachineContainer">
					<span
						style={{
							textDecoration: "underline",
							textAlign: "center",
							fontFamily: "Pacifico",
						}}
					>
						Make Beat
					</span>
					<DrMachine />
				</div>

				<div className="music">
					<div className="tpodContainer">
						<h2 style={{ margin: "10px", padding: "10px" }}>
							Play Tracks
						</h2>
						<Tpod />
					</div>

					<div className="bpmContainer">
						<h2 style={{ margin: "10px", padding: "10px" }}>
							Find BPM
						</h2>

						{/* <BpmDetector /> */}
					</div>

					{/* <Posts posts={posts} /> */}
				</div>

				{/* <Sidebar /> */}
			</div>
		</>
	);
};

export default Music;
