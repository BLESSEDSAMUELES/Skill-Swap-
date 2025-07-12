import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css';

// Dummy data (you'll replace this with real API fetch later)
const dummyUser = {
  id: '2',
  name: 'Anita Sharma',
  photo: 'https://via.placeholder.com/120',
  skillsOffered: ['Graphic Design', 'Illustrator'],
  skillsWanted: ['React', 'UX Writing'],
  rating: 4.5,
  feedback: ['Very professional!', 'Quick learner.', 'Great communication.']
};

const ProfileDetail = () => {
  const navigate = useNavigate();
  const { userId } = useParams(); // not used now, but ready for real data

  const handleRequestClick = () => {
    navigate(`/request/${dummyUser.id}`);
  };

  return (
    <div className="profile-container">
      <div className="title-bar">
        <h1>Skill Swap Platform</h1>
        <div>
          <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
          <button className="nav-btn" onClick={() => navigate('/requests')}>Swap Requests</button>
        </div>
      </div>

      <div className="profile-card">
        <img src={dummyUser.photo} alt="User" className="profile-photo" />
        <h2>{dummyUser.name}</h2>

        <div className="tag-section">
          <strong>Skills Offered:</strong>
          <div className="tag-group">
            {dummyUser.skillsOffered.map((skill, idx) => (
              <span className="tag" key={idx}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="tag-section">
          <strong>Skills Wanted:</strong>
          <div className="tag-group">
            {dummyUser.skillsWanted.map((skill, idx) => (
              <span className="tag" key={idx}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="tag-section">
          <strong>Rating:</strong>
          <p>{dummyUser.rating} ⭐</p>
        </div>

        <div className="tag-section">
          <strong>Recent Feedback:</strong>
          <ul style={{ textAlign: 'left', color: '#ccc', paddingLeft: '20px' }}>
            {dummyUser.feedback.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <button className="edit-btn" onClick={handleRequestClick}>
          Request
        </button>
      </div>
    </div>
  );
};

export default ProfileDetail;
