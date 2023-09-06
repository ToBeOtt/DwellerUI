import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Dashboard from '../../../components/household/Dashboard';
 
export default function DashboardPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.getItem('token') === null && (
      navigate('/LoginPage')
    );
  })


  return (
      <div>
          <Dashboard />
      </div>
    );
}


