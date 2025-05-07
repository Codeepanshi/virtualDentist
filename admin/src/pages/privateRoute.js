
import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const PrivateRoute = ({ token, children }) => {
  if (!token) {
    // If no token, redirect to admin login
    return <Navigate to="/admin/login" />;
  }
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      // Token expired
      localStorage.removeItem('token');
      return <Navigate to="/admin/login" />;
    }

    return children;

  } catch (err) {
    // Invalid token
    localStorage.removeItem('token');
    return <Navigate to="/admin/login" />;
  }
};

export default PrivateRoute;