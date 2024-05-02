import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import BookingConsultation from './Components/BookingConsultation'; // Updated import path
import FindDoctorSearch from './Components/FindDoctorSearch'; // Import FindDoctorSearch component
import DoctorCard from './Components/DoctorCard'; // Import DoctorCard component
import AppointmentForm from './Components/AppointmentForm'; // Import AppointmentForm component

function App() {
  // State to manage authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions (clear session/local storage, update state, etc.)
    setIsLoggedIn(false);
  };

  // Function to handle login (you'll need to implement this)
  const handleLogin = () => {
    // Perform login actions (set session/local storage, update state, etc.)
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        {/* Pass isLoggedIn state and handleLogout function to Navbar */}
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add a new route for BookingConsultation */}
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          {/* Add routes for FindDoctorSearch, DoctorCard, and AppointmentForm */}
          <Route path="/find-doctor" element={<FindDoctorSearch />} />
          <Route path="/doctor-card" element={<DoctorCard />} />
          <Route path="/appointment-form" element={<AppointmentForm />} />
          {/* Add more routes as needed for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
