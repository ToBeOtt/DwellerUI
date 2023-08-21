import React, { useEffect, useState } from 'react';
import DashboardAccordion  from './DashboardAccordion '
import { useNavigate } from 'react-router-dom';
import { useMeeting } from '../../hooks/useMeeting';
import baseUrl from '../../config/apiConfig';

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const { meeting, meetingPoints } = useMeeting();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${baseUrl}/household/GetUserDetails`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else if(response.status === 401) {
        navigate('/LoginPage');
    }
      else {
        navigate('/ErrorPage'); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
   
    <>
    <>
    <DashboardAccordion />
    </>
    <div className="grid grid-cols-3 gap-4 md:w-full m-auto">
      {userData  ? (
        <>
        
          <div className="span-col-1 border-1">
            <h4 className="text-green-500">Användarinfo: </h4> <h4>{userData.user.alias}</h4>
          </div>
          
          <div className="span-col-1 border-1">
            <h4 className="text-green-500">Husinfo: </h4> <h4>{userData.house.name}</h4>
          </div>

          <div className="span-col-1 border-1">
            <h4 className="text-green-500">Nästa Möte:</h4> <h4>{meeting.meeting.dateOfMeeting}</h4>
          </div>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    </>
  );
 
}
