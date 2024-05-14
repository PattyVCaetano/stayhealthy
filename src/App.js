import React, { useState } from 'react';
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
import ProfileCard from './Components/ProfileCard/ProfileCard'; 
import ProfileForm from './Components/ProfileCard/ProfileForm'; 
// Import the Notification component
import Notification from './Components/Notification/Notification';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          <Route path="/find-doctor" element={<FindDoctorSearchIC />} />
          <Route path="/doctor-card" element={<DoctorCardIC />} />
          <Route path="/appointment-form" element={<AppointmentFormIC />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/reviews" element={<ReviewForm />} />
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/profile/edit" element={<ProfileForm />} />
          {/* Add a route for the Notification component */}
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
