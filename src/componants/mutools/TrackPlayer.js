import React from "react";
import "./TrackPlayer.css";
import { createTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
// import ReactPlayer from "react-player/youtube";
// import Sound1 from "./Audios/Sound1.mp3";

const TrackPlayer = () => {
	const muiTheme = createTheme({});
	const src = [
		"https://www.dropbox.com/home/Tracks_final_project?preview=Blue+(Original+Mix).mp3",
		"https://www.dropbox.com/home/Tracks_final_project?preview=Baewatch.mp3",
	];

	// "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
	// 	"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.wav",

	return (
		<div className="playerBox">
			<ThemeProvider theme={muiTheme}>
				<AudioPlayer
					elevation={1}
					width="50%"
					height="100%"
					variation="default"
					spacing={3}
					download={true}
					autoplay={false}
					order="standart"
					preload="auto"
					loop={true}
					displayCloseButton={true}
					src={src}
				/>
			</ThemeProvider>
		</div>
	);
};

export default TrackPlayer;
