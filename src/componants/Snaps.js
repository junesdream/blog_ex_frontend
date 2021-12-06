import React from "react";
// import "./Snaps.css";
import Snap from "../componants/Snap";

const Snaps = ({ snaps }) => {
	console.log("alle snaps", snaps);
	return (
		// <div className="posts">
		// 	{posts.map((p) => (
		// 		<Post post={p} />
		// 	))}
		// </div>

		<div className="snaps">
			{snaps.map((s, i) => (
				<Snap key={i} snap={s} />
			))}
		</div>
	);
};

export default Snaps;
