import { useState, useEffect } from 'react';

export function useMeeting() {
  const [meeting, setMeeting] = useState(null);
  const [meetingPoints, setMeetingPoints] = useState([]);

  useEffect(() => {
    const storedMeetingData = localStorage.getItem('meetingData');
    if (storedMeetingData) {
      const parsedMeetingData = JSON.parse(storedMeetingData);
      setMeeting(parsedMeetingData);
      setMeetingPoints(parsedMeetingData.meeting.meetingPoints);
    }
  }, []);

  return { meeting, meetingPoints };
}