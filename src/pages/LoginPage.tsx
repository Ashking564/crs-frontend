import React from 'react';
import Layout from '../components/layout/Layout';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="login-page">
        <div className="auth-container">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage; 