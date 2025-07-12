import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: Connect to backend API
    // axios.post('/api/login', { email, password })
    //   .then(res => navigate('/'))
    //   .catch(err => alert('Invalid credentials'));

    console.log('Login submitted', email, password);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="title-bar">
        <h1>Skill Swap Platform</h1>
        <button className="home-btn" onClick={() => navigate('/')}>Home</button>
      </div>

      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p className="forgot">Forgot Username/Password?</p>
      </div>
    </div>
  );
};

export default Login;
