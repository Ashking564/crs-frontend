import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { authState, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">Learning Management System</Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          {authState.isAuthenticated && (
            <li><Link to="/dashboard">Dashboard</Link></li>
          )}
        </ul>
      </nav>
      <div className="auth-nav">
        {authState.isAuthenticated ? (
          <div className="user-menu">
            <span>Welcome, {authState.user?.username}</span>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="login-link">Login</Link>
            <Link to="/register" className="register-link">Register</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 