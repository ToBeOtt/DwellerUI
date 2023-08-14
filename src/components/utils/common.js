import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export function PrivateRoute({ children, ...rest }) {
  const token = localStorage.getItem('token');
  return (
    <Route {...rest}>
        {token ? children : <Navigate to="/login" />}
    </Route> 
  );
}