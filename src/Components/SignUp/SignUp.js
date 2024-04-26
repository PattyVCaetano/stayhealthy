import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when input changes
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic here
    const validationErrors = {};
    // Check if required fields are filled
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }
    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    // Check phone number length
    if (formData.phone.trim().length !== 10) {
      validationErrors.phone = 'Phone number must be 10 digits';
    }
    // Set errors if any, otherwise submit the form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit form
      console.log('Form submitted successfully');
      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        password: ''
      });
      // Clear errors
      setErrors({});
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member? <span><a href="../Login/Login.html" style={{ color: '#2190FF' }}> Login</a></span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
              {errors.name && <span className="text-danger">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
              {errors.phone && <span className="text-danger">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
              {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <p>Already have an account? <a href="../Login/Login.html">Login here</a>.</p>
      </div>
    </div>
  );
}

export default SignUp;
