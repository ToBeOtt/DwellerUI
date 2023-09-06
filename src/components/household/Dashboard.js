import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../config/apiConfig';

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
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
      {userData  ? (
        <>
          <div className="grid grid-rows-1 w-full"> 
            <div className="row-span-1 bg-[#EFE7D0] min-h-[60vh]">
              <div className="bg-[#EFE7D0] w-3/6 m-auto m-5 p-5">
                <h4 className="font-serif text-title text-[#279A88]">Användarinfo: </h4> 
                <p className="font-serif text-stone-900">{userData.user.alias}</p>

                <h4 className="font-serif text-[#279A88]">Husinfo: </h4> 
                <p className="text-stone-900 ">{userData.house.name}</p>
                <p className="text-stone-900 ">{userData.house.name}</p>
                <p className="text-stone-900 ">{userData.house.name}</p>

              </div>
            </div>
          </div>

          </>
      ) : (
        <p>Loading user data...</p>
      )}
    
    </>
        
  );
}