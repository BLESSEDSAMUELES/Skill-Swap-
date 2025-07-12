import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css';

// Dummy user data – later you'll fetch this from backend using userId
const dummyReceiver = {
  id: '2',
  name: 'Anita Sharma',
  skillsOffered: ['Graphic Design', 'Illustrator'],
  skillsWanted: ['React', 'UX Writing']
};

const dummyCurrentUser = {
  id: '1',
  name: 'You',
  yourSkills: ['React', 'Python', 'UI/UX']
};

const RequestForm = () => {
  const { userId } = useParams(); // ID of the person receiving the request
  const navigate = useNavigate();

  const [offeredSkill, setOfferedSkill] = useState('');
  const [requestedSkill, setRequestedSkill] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const swapRequest = {
      fromUserId: dummyCurrentUser.id,
      toUserId: dummyReceiver.id,
      offeredSkill,
      requestedSkill,
      message,
      status: 'Pending'
    };

    console.log('Submitting Swap Request:', swapRequest);
    // Later, replace console.log with a POST request to backend
    alert('Swap request submitted!');
    navigate('/requests');
  };

  return (
    <div className="profile-container">
      <div className="title-bar">
        <h1>Skill Swap Platform</h1>
        <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
      </div>

      <div className="profile-card">
        <h2>Send Request to {dummyReceiver.name}</h2>
        <form onSubmit={handleSubmit}>

          <div className="tag-section">
            <label>Your Skill to Offer:</label><br />
            <select
              className="input"
              value={offeredSkill}
              onChange={(e) => setOfferedSkill(e.target.value)}
              required
            >
              <option value="">-- Select a Skill --</option>
              {dummyCurrentUser.yourSkills.map((skill, idx) => (
                <option key={idx} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          <div className="tag-section">
            <label>Skill You Want to Learn from {dummyReceiver.name}:</label><br />
            <select
              className="input"
              value={requestedSkill}
              onChange={(e) => setRequestedSkill(e.target.value)}
              required
            >
              <option value="">-- Select a Skill --</option>
              {dummyReceiver.skillsOffered.map((skill, idx) => (
                <option key={idx} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          <div className="tag-section">
            <label>Optional Message:</label><br />
            <textarea
              className="input"
              rows="4"
              placeholder="Say something about your intent..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="edit-btn">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
