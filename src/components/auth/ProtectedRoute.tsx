import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  redirectPath = '/login'
}) => {
  const { authState } = useAuth();
  
  if (authState.loading) {
    // You could render a loading spinner here
    return <div>Loading...</div>;
  }
  
  if (!authState.isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  
  return <Outlet />;
};

export default ProtectedRoute; 