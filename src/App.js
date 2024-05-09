// Import React and useState from 'react'
import React, { useState } from 'react';
// Import necessary components and styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import BookingConsultation from './Components/BookingConsultation';
import FindDoctorSearchIC from './Components/InstantConsultation/FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCardIC from './Components/InstantConsultation/DoctorCardIC/DoctorCardIC';
import AppointmentFormIC from './Components/InstantConsultation/AppointmentFormIC/AppointmentFormIC';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import ReviewForm from './Components/ReviewForm/ReviewForm';
// Import ProfileCard component
import ProfileCard from './Components/ProfileCard/ProfileCard'; // Adjust the import path as necessary

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
          <Route path="/find-doctor" element={<FindDoctorSearchIC />} />
          <Route path="/doctor-card" element={<DoctorCardIC />} />
          <Route path="/appointment-form" element={<AppointmentFormIC />} />
          {/* Add a route for InstantConsultation */}
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          {/* Add a route for ReviewForm */}
          <Route path="/reviews" element={<ReviewForm />} />
          {/* Add a route for ProfileCard */}
          <Route path="/profile" element={<ProfileCard />} />
          {/* Add more routes as needed for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
