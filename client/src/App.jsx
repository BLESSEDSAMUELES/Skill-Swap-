import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import ProfileDetail from './pages/ProfileDetail';
import SwapRequestForm from './pages/SwapRequestForm';
import SwapDashboard from './pages/SwapDashboard';

import './App.css'; // Optional for global styles

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/profile-detail/:id" element={<ProfileDetail />} />
        <Route path="/request/:id" element={<SwapRequestForm />} />
        <Route path="/dashboard" element={<SwapDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
