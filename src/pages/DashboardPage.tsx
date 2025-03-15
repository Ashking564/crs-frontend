import React from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';

const DashboardPage: React.FC = () => {
  const { authState } = useAuth();
  const user = authState.user;

  return (
    <Layout>
      <div className="dashboard-page">
        <h1>Dashboard</h1>
        
        <div className="user-welcome">
          <h2>Welcome, {user?.username}!</h2>
          <p>Role: {user?.role}</p>
        </div>
        
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>My Courses</h3>
            <p>You are currently enrolled in 0 courses.</p>
            <a href="/courses" className="card-link">Browse Courses</a>
          </div>
          
          <div className="dashboard-card">
            <h3>Progress</h3>
            <p>Track your learning progress here.</p>
            <div className="progress-placeholder">
              <p>No progress data available yet.</p>
            </div>
          </div>
          
          <div className="dashboard-card">
            <h3>Upcoming Deadlines</h3>
            <p>Stay on top of your assignments and exams.</p>
            <div className="deadlines-placeholder">
              <p>No upcoming deadlines.</p>
            </div>
          </div>
          
          <div className="dashboard-card">
            <h3>Notifications</h3>
            <p>Stay updated with the latest announcements.</p>
            <div className="notifications-placeholder">
              <p>No new notifications.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage; 