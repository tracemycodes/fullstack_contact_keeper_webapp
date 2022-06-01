import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return !isAuthenticated && !loading ? <Navigate to='/login' /> : children;
};

export default PrivateRoute;
