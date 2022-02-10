import React from "react";
import "./Kalendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Clock from "react-digital-clock";

const localizer = momentLocalizer(moment);

const myEventsList = [
	{
		start: moment().toDate(),
		end: moment().add(1, "days").toDate(),
		title: "Some title",
	},
];

const Kalendar = () => (
	<div className="kalendar">
		<div className="uhrBody">
			<Clock />
		</div>

		<div className="kalendarContainer">
			{/* <Calendar
				localizer={localizer}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 600, width: "auto", backgroundColor: "white" }}
			/> */}
			<Calendar
				localizer={localizer}
				events={myEventsList}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 500 }}
				eventPropGetter={(event, start, end, isSelected) => ({
					event,
					start,
					end,
					isSelected,
					style: { backgroundColor: "green" },
				})}
			/>

		</div>
	</div>
);

export default Kalendar;
