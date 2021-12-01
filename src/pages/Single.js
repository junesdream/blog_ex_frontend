import React from "react";
import "./Single.css";
import Sidebar from "../componants/Sidebar";
import SinglePost from "../componants/SinglePost";

const Single = () => {
	return (
		<div className="single">
			<SinglePost />
			<Sidebar />
		</div>
	);
};

export default Single;
