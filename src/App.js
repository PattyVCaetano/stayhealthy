import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp'; // Import the SignUp component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Define the route for Landing_Page as the home route */}
          <Route path="/login" element={<Login />} /> {/* Define the route for Login */}
          <Route path="/signup" element={<SignUp />} /> {/* Define the route for SignUp */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
