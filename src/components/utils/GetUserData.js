import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../config/apiConfig';


function GetUserData({ onDataFetched }) {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch(`${baseUrl}/household/GetUserDetails`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        onDataFetched(data);
      } else {
            navigate('/error'); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return null;
}

export default GetUserData;