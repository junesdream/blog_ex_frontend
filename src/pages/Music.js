import React from "react";
import "./Music.css";
// import { useState } from "react";
import Header from "../componants/Header";
// import Posts from "../componants/Posts";
// import Sidebar from "../componants/Sidebar";
// import TrackPlayer from "../componants/mutools/TrackPlayer";
import Boxen from "../componants/images/Boxen.png";
import DrMachine from "../componants/mutools/DrMachine";
import MuPlayers from "../componants/mutools/MuPlayers";
import Heart from "../componants/images/Heart.png";
// import Tpod from "../componants/tpod/Tpod";
// import BpmDetector from "../componants/mutools/BpmDetector";

const Music = () => {
	// const [posts, setPosts] = useState([]);
	return (
		<>
			<Header />
			<div className="musicContainer">
				<div className="trackPlayerBox">
					<span
						style={{
							textDecoration: "underline",
							textAlign: "center",
							fontFamily: "Pacifico",
						}}
					>
						Listen new Tracks
					</span>
				</div>

				<div>
					<img className="listenImg" src={Boxen} alt="boxen" />
					<img className="listenImg" src={Heart} alt="heart" />
				</div>
				<span style={{ fontSize: "50px" }}> &#9198;</span>
				<div className="muPlayers">
					<MuPlayers />
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
				{/* <div className="musicItemBox">
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

						<BpmDetector />
						
					</div>

					<Posts posts={posts} />
				</div>
				<Sidebar /> */}
			</div>
		</>
	);
};

export default Music;
