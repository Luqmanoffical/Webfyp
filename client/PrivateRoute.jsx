import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Check if email is in localStorage
  const email = localStorage.getItem('Email');
  
  // If email is not found, redirect to the login page
  if (!email) {
    return <Navigate to="/login" replace />;
  }

  // If email is found, render the children (outlet)
  return <Outlet />;
};

export default PrivateRoute;
