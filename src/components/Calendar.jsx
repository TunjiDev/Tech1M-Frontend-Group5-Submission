import React, { useState } from "react";
import "./Calendar.css";

function Calendar() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const days = [];

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.unshift("");
  }

  const changeMonth = (value) => {
    setMonth((prevMonth) => prevMonth + value);
    if (month === 12 && value === 1) {
      setYear((prevYear) => prevYear + 1);
    } else if (month === 1 && value === -1) {
      setYear((prevYear) => prevYear - 1);
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="calendar-month">{`${month}/${year}`}</div>
        <div className="calendar-nav">
          <button onClick={() => changeMonth(-1)}>{"<"}</button>
          <button onClick={() => changeMonth(1)}>{">"}</button>
        </div>
      </div>
      <div className="calendar-body">
        {weeks.map((day, index) => (
          <div key={index} className="calendar-day">
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div key={index} className={`calendar-date ${day === "" ? "empty" : ""}`}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
