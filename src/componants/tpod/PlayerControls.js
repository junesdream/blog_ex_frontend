import React from 'react'
import { FaPlay, FaPause, FaForward, FaBackward, FaIcons } from "react-icons/fa";

const PlayerControls = (props) => {
    return (
		<div className="c-player-controls">
			<button className="skip-btn" onClick={() => props.SkipTrack(false)}>
				<FaBackward />
			</button>
			<button
				className="play-btn"
				onClick={() => props.setIsPlaying(!props.isPlaying)}
			>
				<FaPlay {...(props.isPlaying ? FaPause : FaPlay)} />
			</button>
			<button className="skip-btn" onClick={() => props.SkipTrack()}>
				<FaForward />
			</button>
		</div>
	);
}

export default PlayerControls
