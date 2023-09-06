import React, { useState } from 'react';
import Calendar from 'react-calendar';

function HouseholdCalendar() {
  const [value, onChange] = useState(new Date());

  // Custom function to format the day content
  const formatDayContent = ({ date, view }) => {
    // Customize the format for all views (e.g., day, month, week)
    return (
      <div className="text-left">
        <div className="text-lg font-bold">{date.getDate()}</div>
        <div className="text-sm">{getDayName(date)}</div>
      </div>
    );
  };

  // Function to get the day name (e.g., "Sun") from a Date object
  const getDayName = (date) => {
    const daysOfWeek = ['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör'];
    return daysOfWeek[date.getDay()];
  };

  return (
    <div className="p-5 bg-white border rounded-lg shadow-lg">
      <Calendar
        onChange={onChange}
        value={value}
        dayTile={formatDayContent} // Custom day content
        className="border-t-4 border-blue-500"
      />
    </div>
  );
}

export default HouseholdCalendar;
