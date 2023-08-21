import NewMeeting from '../../../components/meeting/NewMeeting';
import Meeting from '../../../components/meeting/activeMeeting/Meeting';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import baseUrl from '../../../config/apiConfig';

export default function MeetingPage() {
    const [meetingExist, setMeetingExist] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        localStorage.getItem('token') === null && (
          navigate('/LoginPage')
        );
      })

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
                const meetingData = await response.json();
                setMeetingExist(true);
                localStorage.setItem('meetingData', JSON.stringify(meetingData));
            } 
            else if(response.status === 401) {
                navigate('/LoginPage')
            }
            else {
            console.error('Error fetching meetings');
            }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchMeetings();
    }, []);


    return (
        <div>
            {meetingExist ? (
                <Meeting />
            ) : (
                <NewMeeting />
            )}
      </div>     
    );
}