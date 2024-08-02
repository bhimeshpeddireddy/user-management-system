import React, { useState, useEffect } from 'react';

function Profile({ user, onLogout }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio || '');

  useEffect(() => {
    if (!user) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setName(storedUser.name);
        setEmail(storedUser.email);
        setBio(storedUser.bio || '');
      }
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email, bio };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    alert('Profile updated!');
  };

  return (
    <div className="container">
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="profileName">Name:</label>
        <input
          type="text"
          id="profileName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="profileEmail">Email:</label>
        <input
          type="email"
          id="profileEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="profileBio">Bio:</label>
        <textarea
          id="profileBio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        ></textarea>

        <button type="submit">Save</button>
      </form>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Profile;
