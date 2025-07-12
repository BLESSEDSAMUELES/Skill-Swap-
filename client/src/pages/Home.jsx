import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Uncomment when connecting to backend
import './styles.css';

const sampleUsers = [
  {
    id: 1,
    name: 'Marc Demo',
    photo: 'https://via.placeholder.com/80',
    skillsOffered: ['Web Design', 'Python'],
    skillsWanted: ['UI/UX'],
    rating: 3.9,
    availability: 'Weekends',
  },
  {
    id: 2,
    name: 'Asha Kumar',
    photo: 'https://via.placeholder.com/80',
    skillsOffered: ['Graphic Design'],
    skillsWanted: ['React.js'],
    rating: 4.2,
    availability: 'Weekdays',
  },
];

const Home = () => {
  const [users, setUsers] = useState([]);
  const [availabilityFilter, setAvailabilityFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = true; // Change based on auth logic later

  useEffect(() => {
    // Fetch from backend later
    // axios.get('/api/users/public').then(res => setUsers(res.data));
    setUsers(sampleUsers);
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.skillsOffered.some(skill =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      user.skillsWanted.some(skill =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesAvailability = availabilityFilter
      ? user.availability === availabilityFilter
      : true;

    return matchesSearch && matchesAvailability;
  });

  return (
    <div className="home-container">
      <div className="title-bar">
        <h1>Skill Swap Platform</h1>
        {isLoggedIn && (
          <div className="right-controls">
            <button onClick={() => navigate('/dashboard')}>Swap Requests</button>
            <img src="https://via.placeholder.com/40" alt="Profile" className="profile-icon" />
          </div>
        )}
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search skills or names..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
        >
          <option value="">All Availabilities</option>
          <option value="Weekdays">Weekdays</option>
          <option value="Weekends">Weekends</option>
        </select>
      </div>

      <div className="user-list">
        {filteredUsers.map(user => (
          <div key={user.id} className="user-card">
            <img
              src={user.photo}
              alt={user.name}
              className="profile-photo"
              onClick={() => navigate(`/profile/${user.id}`)}
            />
            <h3>{user.name}</h3>
            <div>
              <strong>Skills Offered:</strong>{' '}
              {user.skillsOffered.map(skill => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
            <div>
              <strong>Skills Wanted:</strong>{' '}
              {user.skillsWanted.map(skill => (
                <span key={skill} className="tag wanted">{skill}</span>
              ))}
            </div>
            <div className="rating">⭐ {user.rating}/5</div>
            <button
              className="request-button"
              disabled={!isLoggedIn}
              onClick={() => navigate('/swap-request')}
            >
              {isLoggedIn ? 'Request' : 'Login to Request'}
            </button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <span className="page">1</span>
        <span className="page">2</span>
        <span className="page">3</span>
      </div>
    </div>
  );
};

export default Home;
