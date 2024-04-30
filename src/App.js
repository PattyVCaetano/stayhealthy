// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  // State to manage authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions (clear session/local storage, update state, etc.)
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        {/* Pass isLoggedIn state and handleLogout function to Navbar */}
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
