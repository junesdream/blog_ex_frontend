import React from "react";
import "./Kalendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Clock from "react-digital-clock";

const localizer = momentLocalizer(moment);

const Kalendar = () => (
	<div>
		<div className="uhrBody">
			<Clock />
		</div>
		<div className="kalendarContainer">
			<Calendar
				localizer={localizer}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 600, width: "auto", backgroundColor: "white" }}
			/>
		</div>
	</div>
);

export default Kalendar;
