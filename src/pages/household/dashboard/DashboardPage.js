import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import EventGrid from '../../../components/household/dashboard/events/EventGrid';

export default function DashboardPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.getItem('token') === null && (
      navigate('/LoginPage')
    );
  })


  return (
    <>

    <main className="">
    
      <EventGrid/>
              
    </main>
           
    </>     
    );
}


