import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Purchases from './Purchases'; // Import the Purchases component
import "./profile.css";

const Profile = ({ onSave }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    profilePicture: null,
  });
  const [isEditing, setIsEditing] = useState(false); // Set initial state to false for view mode

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile({
        ...profile,
        profilePicture: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const saveProfile = () => {
    onSave(profile);
    setIsEditing(false); // Switch to view mode after saving
  };

  const toggleEditMode = () => {
    setIsEditing((prevMode) => !prevMode); // Toggle editing mode
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            
            <li>
              <Link to="/purchases">Purchases</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/purchases">
            <Purchases />
          </Route>
          <Route path="/">
            <div className="profile-container">
              <h2>{isEditing ? 'Edit Profile' : 'View Profile'}</h2>
              {isEditing && (
                <React.Fragment>
                  <div>
                    <label>Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Profile Picture:</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePictureUpload}
                    />
                  </div>
                  <button onClick={saveProfile}>Save Profile</button>
                </React.Fragment>
              )}
              {!isEditing && (
                <React.Fragment>
                  {/* Display profile data */}
                  <div>
                    <h3>Profile Data:</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email: {profile.email}</p>
                    {/* Display profile picture if available */}
                    {profile.profilePicture && (
                      <div>
                        <label>Profile Picture:</label>
                        <img src={profile.profilePicture} alt="Profile" style={{ width: '100px', height: '100px' }} />
                      </div>
                    )}
                  </div>
                  <button onClick={toggleEditMode}>Edit Profile</button>
                </React.Fragment>
              )}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Profile;
