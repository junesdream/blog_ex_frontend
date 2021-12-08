import React, { useState } from "react";
import "./MuPlayers.css";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
// import Moroder from "../../tracks/Moroder.ogg";
import Good_vibration from "../../tracks/Good_vibration.ogg";
import Green_tsunami from "../../tracks/Green_tsunami.ogg";
import Blue from "../../tracks/Blue.ogg";
import Fire from "../../tracks/Fire.ogg";
import LoveIsAColour from "../../tracks/LoveIsAColour.ogg";
import Medicine from "../../tracks/Medicine.ogg";
import Baewatch from "../../tracks/Baewatch.ogg";
import Ring_ring from "../../tracks/Ring_ring.ogg";

const MuPlayer = () => {
	const [track, setTrack] = useState(null);

	const handleChange = (e) => {
		const selected = e.target.value;
		setTrack(selected);
	};

	// // const src = [
	// 	"../../../public/tracks/Blue.mp3";
	// 	"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
	// 	"https://www.dropbox.com/home/Tracks_final_project?preview=Blue+(Original+Mix).mp3",
	// 	"https://www.dropbox.com/home/Tracks_final_project?preview=Speak+Up+(Original+Mix)+%5BRecovery+Collective%5D.mp3",
	// 	"https://www.dropbox.com/home/Tracks_final_project?preview=Baewatch.mp3",
	// ];

	return (
		<div className="muPlayersContainer">
			<div className="audioPlayer">
				<ReactAudioPlayer src={track} autoPlay controls />
				<div className="musicSelector">
					<select id="music" onChange={handleChange} value={track}>
						{/* <option value={Moroder}>Moroder</option> */}
						<option value={Good_vibration}>Good Vibration</option>
						<option value={Blue}>Blue</option>
						<option value={Green_tsunami}>Green Tsunami</option>
						<option value={Fire}>Fire</option>
						<option value={LoveIsAColour}>Love is a Colour</option>
						<option value={Medicine}>Medicine</option>
						<option value={Baewatch}>Baewatch</option>
						<option value={Ring_ring}>Ring_ring</option>
					</select>
					{/* <button onClick={() => setTrack(Blue)}>Blue</button>
					<button onClick={() => setTrack(Moroder)}>Moroder</button> */}
				</div>
			</div>

			<div className="youPlayer">
				<span className="playerName"> Listen Youtube </span>
				<ReactPlayer
					url=" https://youtu.be/QZEVNMOpxnc "
					controls={true}
					// light={true}
				/>
			</div>

			<div className="mixCloudPlayer">
				<span className="playerName"> Listen Mixcloud</span>
				<ReactPlayer
					url="https://www.mixcloud.com/TanteJune/melodic-techno-oktober-1-2021/"
					controls={true}
					// light={true}
				/>
			</div>

			<div className="soundCloudPlayer">
				<span className="playerName"> Listen Soundcloud </span>
				<ReactPlayer
					url="https://soundcloud.com/bl-aka-sori"
					controls={true}
					light={true}
				/>
			</div>
		</div>
	);
};

export default MuPlayer;
