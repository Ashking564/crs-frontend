import React from 'react';
import Layout from '../components/layout/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="home-page">
        <section className="hero-section">
          <h1>Welcome to the Learning Management System</h1>
          <p>Discover courses, enhance your skills, and achieve your learning goals.</p>
          <div className="cta-buttons">
            <a href="/courses" className="primary-button">Browse Courses</a>
            <a href="/register" className="secondary-button">Sign Up</a>
          </div>
        </section>
        
        <section className="features-section">
          <h2>Why Choose Our Platform</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Diverse Course Selection</h3>
              <p>Access a wide range of courses across various disciplines.</p>
            </div>
            <div className="feature-card">
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals and academic experts.</p>
            </div>
            <div className="feature-card">
              <h3>Flexible Learning</h3>
              <p>Study at your own pace, anytime and anywhere.</p>
            </div>
            <div className="feature-card">
              <h3>Interactive Content</h3>
              <p>Engage with multimedia content and hands-on exercises.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage; 