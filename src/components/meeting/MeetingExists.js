import { useState } from 'react';
import baseUrl from '../../config/apiConfig';

export default function MeetingExists(props) {
  const [existingMeeting, setExistingMeeting] = useState(null); 

  const CheckIfMeetingExists = async () => {
    try {
      const response = await fetch(`${baseUrl}/meeting/MeetingExists`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (response.ok) {
        const data = await response.json();
        setExistingMeeting(data.MeetingExist); 
      } else {
        console.error('Error on date selection');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  CheckIfMeetingExists();
        return (
            <>
            
            </>
        )

}