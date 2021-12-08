import React from "react";
import "./MyCalendar.css";
import { useState } from "react";
import Calendar from "react-calendar";
import Clock from "react-digital-clock";



const MyCalendar = () => {

 const [value, onChange] = useState(new Date());

 return (
		<div className="myCalendarContainer">
			<Clock className="uhrBody" />
			<Calendar
				className="calendarBody"
				onChange={onChange}
				value={value}
			/>
		</div>
 );
}

export default MyCalendar;
 