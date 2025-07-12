
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.css';

// Sample user data (replace with actual data from backend later)
const dummyUser = {
  id: '1',
  name: 'Marc Demo',
  location: 'Chennai, India',
  profileType: 'Public',
  photo: 'https://via.placeholder.com/120',
  skillsOffered: ['React', 'Node.js'],
  skillsWanted: ['UI Design', 'Python'],
  availability: 'Weekends',
};

const UserProfile = () => {
  const { userId } = useParams(); // For future dynamic fetching
  const navigate = useNavigate();
  const loggedInUserId = '1'; // simulate logged-in user

  const isOwnProfile = dummyUser.id === loggedInUserId;

  return (
    <div className="profile-container">
      <div className="title-bar">
        <h1>Skill Swap Platform</h1>
        <div>
          <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
          <button className="nav-btn" onClick={() => navigate('/requests')}>Swap Requests</button>
          <button className="nav-btn" onClick={() => navigate('/profile')}>User Profile</button>
        </div>
      </div>

      <div className="profile-card">
        <img src={dummyUser.photo} alt="Profile" className="profile-photo" />
        <h2>{dummyUser.name}</h2>
        <p className="location">{dummyUser.location}</p>

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
          <strong>Availability:</strong>
          <span className="tag">{dummyUser.availability}</span>
        </div>

        <p className="profile-type">Profile Type: {dummyUser.profileType}</p>

        {isOwnProfile && (
          <button className="edit-btn" onClick={() => alert('Edit Profile coming soon!')}>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
