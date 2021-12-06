// import React from 'react'
// import RealTimeBPMAnalyzer from "realtime-bpm-analyzer";

// // Create new instance of AudioContext
// 	const audioContext = new AudioContext();
// 	// Set the source with the HTML Audio Node
// 	const source = audioContext.createMediaElementSource(
// 		document.getElementById("track")
// 	);
// 	// Set the scriptProcessorNode to get PCM data in real time
// 	const scriptProcessorNode = audioContext.createScriptProcessor(4096, 1, 1);
// 	// Connect everythings together
// 	scriptProcessorNode.connect(audioContext.destination);
// 	source.connect(scriptProcessorNode);
// 	source.connect(audioContext.destination);

// const BpmDetector = () => {

// 	const onAudioProcess = new RealTimeBPMAnalyzer({
// 		scriptNode: {
// 			bufferSize: 4096,
// 		},
// 		pushTime: 2000,
// 		pushCallback: (err, bpm) => {
// 			console.log("bpm", bpm);
// 		},
// 	});
// 	// Attach realTime function to audioprocess event.inputBuffer (AudioBuffer)
// 	scriptProcessorNode.onaudioprocess = (e) => {
// 		onAudioProcess.analyze(e);
// 	};
	
// 	return (
// 		<div>
		
// 			<audio src="./new_order-blue_monday.mp3" id="track"></audio>
// 		</div>
// 	);
// }

// export default BpmDetector
