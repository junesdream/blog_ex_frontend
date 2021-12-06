import React from "react";
import "./Tpod.css";
import { useState, useEffect } from "react";
import Player from "../tpod/Player";
import track1 from "../images/track1.png";
// img_src: { track1 },
// img_src: "./images/track1.jpg",
const Tpod = () => {
	const [tracks] = useState([
		{
			title: "Baewatch (Original Mix)",
			artist: "Joseph Edmund",
			img_src: { track1 },
			src: "./tracks/baewatch.mp3",
		},
		{
			title: "Blue",
			artist: "Fabrificaation",
			img_src: "./images/track-2.jpg",
			src: "./tracks/blue.mp3",
		},
		{
			title: "Medicine",
			artist: "Jasons feat. Dope Eartj Alien",
			img_src: "./images/track-3.jpg",
			src: "./tracks/medicine.mp3",
		},
		{
			title: "Moroder [Eklektisch]",
			artist: "Rafael Serato",
			img_src: "./images/track-4.jpg",
			src: "./tracks/Moroder [Eklektisch].mp3",
		},

		{
			title: "Ring Ring",
			artist: "Monki",
			img_src: "./images/track-4.jpg",
			src: "./tracks/ring_ring.mp3",
		},
	]);

	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [nextTrackIndex, setNextTrackIndex] = useState(currentTrackIndex + 1);

	useEffect(() => {
		setNextTrackIndex(() => {
			if (currentTrackIndex + 1 > tracks.length - 1) {
				return 0;
			} else {
				return currentTrackIndex + 1;
			}
		});
	}, [currentTrackIndex, tracks.length]);

	return (
		<div className="tpodBox">
			<Player
				className="tpodBody"
				currentTrackIndex={currentTrackIndex}
				setCurrentTrackIndex={setCurrentTrackIndex}
				nextTrackIndex={nextTrackIndex}
				tracks={tracks}
			/>
		</div>
	);
};

export default Tpod;
