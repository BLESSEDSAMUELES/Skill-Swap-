import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

// Dummy data – you’ll fetch this from your backend later
const dummyRequests = [
  {
    id: 1,
    direction: 'received', // or 'sent'
    from: { name: 'Anita Sharma', photo: '', skill: 'Illustrator' },
    to: { name: 'You', photo: '', skill: 'React' },
    status: 'Pending'
  },
  {
    id: 2,
    direction: 'sent',
    from: { name: 'You', photo: '', skill: 'Python' },
    to: { name: 'Ravi Raj', photo: '', skill: 'UX Writing' },
    status: 'Accepted'
  },
  {
    id: 3,
    direction: 'received',
    from: { name: 'Kavita Menon', photo: '', skill: 'Figma' },
    to: { name: 'You', photo: '', skill: 'React' },
    status: 'Rejected'
  }
];

const RequestDashboard = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState(dummyRequests);

  const handleAction = (id, newStatus) => {
    const updated = requests.map(req => {
      if (req.id === id) return { ...req, status: newStatus };
      return req;
    });
    setRequests(updated);
  };

  return (
    <div className="container">
      <div className="title-bar">
        <h1>Swap Request Dashboard</h1>
        <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
      </div>

      <div className="request-list">
        {requests.map(req => (
          <div key={req.id} className="request-card">
            <div className="request-info">
              <strong>{req.direction === 'sent' ? 'To:' : 'From:'}</strong> {req.direction === 'sent' ? req.to.name : req.from.name}
              <div>
                <span className="tag">You: {req.from.skill}</span>
                <span className="tag">Them: {req.to.skill}</span>
              </div>
            </div>

            <div className="status-section">
              <span className={`status-tag ${req.status.toLowerCase()}`}>{req.status}</span>

              {req.direction === 'received' && req.status === 'Pending' && (
                <div className="btn-row">
                  <button className="edit-btn" onClick={() => handleAction(req.id, 'Accepted')}>Accept</button>
                  <button className="reject-btn" onClick={() => handleAction(req.id, 'Rejected')}>Reject</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestDashboard;
