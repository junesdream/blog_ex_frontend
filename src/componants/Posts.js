import React from 'react'
import "./Posts.css"
import Post from "../componants/Post";


const Posts = ({posts}) => {
    return (
		// <div className="posts">
		// 	{posts.map((p) => (
		// 		<Post post={p} />
		// 	))}
		// </div>
		<div className="posts">
		{posts.map((p,i ) => (
			<Post key={i} post={p} />
		))}
		</div>
	);
}

export default Posts
