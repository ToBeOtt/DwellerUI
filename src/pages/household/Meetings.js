import NewMeetingDatePicker from '../../components/meeting/NewMeetingDatePicker';
import ActiveMeeting from '../../components/meeting/ActiveMeeting';
import { useState, useEffect } from 'react';
import baseUrl from '../../config/apiConfig';

export default function Meetings() {
    const [meetingExist, setMeetingExist] = useState(false);
    const [meeting, setMeeting] = useState([]);

    useEffect(() => {
        async function fetchMeetings() {
            try {
                console.log('Fetching meetings...');
            const response = await fetch(`${baseUrl}/meeting/GetMeeting`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
              });
            
            if (response.ok) {
            const meetingsData = await response.json();
            setMeetingExist(true);
            setMeeting(meetingsData);
            } else {
            console.error('Error fetching meetings');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        }

        fetchMeetings();
    }, []);


    return (
      <>
        {/* ContentTitle and ContentText components... */}
        
        <div>
          <NewMeetingDatePicker/>
          <ActiveMeeting meeting={meeting} />
        </div>
      </>
    );
  }
