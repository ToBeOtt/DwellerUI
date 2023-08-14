import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, redirectPath = '/login', ...props }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
   

