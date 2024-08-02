import React, { useState } from 'react';

function Registration({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    onRegister(user);
  };

  return (
    <div className="container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="regName">Name:</label>
        <input
          type="text"
          id="regName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="regEmail">Email:</label>
        <input
          type="email"
          id="regEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="regPassword">Password:</label>
        <input
          type="password"
          id="regPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
