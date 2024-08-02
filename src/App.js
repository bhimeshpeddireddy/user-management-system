import React, { useState } from 'react';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Profile from './Components/Profile';
import './css/styles.css';

function App() {
  const [user, setUser] = useState(null);

  const handleRegister = (newUser) => {
    setUser(newUser);
  };

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {!user && (
        <div>
          <Registration onRegister={handleRegister} />
          <Login onLogin={handleLogin} />
        </div>
      )}
      {user && <Profile user={user} onLogout={handleLogout} />}
    </div>
  );
}

export default App;
