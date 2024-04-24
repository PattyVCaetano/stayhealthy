import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page'; // Import the Landing_Page component
import Login from './Components/Login/Login'; // Import the Login component
import SignUp from './Components/Sign_Up/SignUp'; // Import the SignUp component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} /> {/* Define the route for Landing_Page as the home route */}
          <Route path="/login" element={<Login />} /> {/* Define the route for Login */}
          <Route path="/signup" element={<SignUp />} /> {/* Define the route for SignUp */}
        </Routes>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
