import React from 'react';
import "./Contact.css";

const Contact = () => {

    return (
		<div className="contactBox">
			<span className="contactTitle">
				Keep in touch!
			</span>
			<span className="contactTitleMail">
				&#9993; </span>
			<form>
				<input
					name="name"
					type="text"
					className="feedback-input"
					placeholder="Name"
				/>
				<input
					name="email"
					type="text"
					className="feedback-input"
					placeholder="Email"
				/>
				<textarea
					name="text"
					className="feedback-input"
					placeholder="Comment"
				></textarea>
				<button className="contactBtn" type="submit">SUBMIT</button>
				
			</form>
		</div>
	);
}

export default Contact
