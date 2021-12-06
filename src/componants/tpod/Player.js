import React from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";
import { useState, useRef, useEffect } from "react";

const Player = (props) => {
	const audioEl = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		if (isPlaying) {
			audioEl.current.play();
		} else {
			audioEl.current.pause();
		}
	});

	const SkipTrack = (forwards = true) => {
		if (forwards) {
			props.setCurrentTrackIndex(() => {
				let temp = props.currentTrackIndex;
				temp++;

				if (temp > props.tracks.length - 1) {
					temp = 0;
				}

				return temp;
			});
		} else {
			props.setCurrentTrackIndex(() => {
				let temp = props.currentTrackIndex;
				temp--;

				if (temp < 0) {
					temp = props.tracks.length - 1;
				}

				return temp;
			});
		}
	};
	return (
		<div className="c-player">
			<audio
				src={props.tracks[props.currentTrackIndex].src}
				ref={audioEl}
			>
			</audio>
			<h4>Playing now</h4>
			<PlayerDetails track={props.tracks[props.currentTrackIndex]} />
			<PlayerControls
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				SkipTrack={SkipTrack}
			/>
			<p>
				Next up:
				<span>
					{props.tracks[props.nextTrackIndex].title} by
					{props.tracks[props.nextTrackIndex].artist}
				</span>
			</p>
		</div>
	);
};

export default Player;
