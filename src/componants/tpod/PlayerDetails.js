import React from "react";

const PlayerDetails = (props) => {
	return (
		<div className="c-player--details">
			<div className="details-img" >
				<img src={props.track.img_src} alt="" />
			</div>
			<h3 className="details-title"> {props.track.title}</h3>
			<h4 className="details-title"> {props.track.artist}</h4>
		</div>
	);
};

export default PlayerDetails;
