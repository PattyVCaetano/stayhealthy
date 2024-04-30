import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling

const Login = () => {
    const [formData, setFormData] = useState({
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
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        }
        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required';
        }
        // Set errors if any, otherwise submit the form
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Submit form
            console.log('Form submitted successfully');
            // Reset form fields
            setFormData({
                email: '',
                password: ''
            });
            // Clear errors
            setErrors({});
        }
    };

    return (
        <div className="container">
            <div className="login-grid">
                <div className="login-text">
                    <h2>Login</h2>
                </div>
                <div className="login-text">
                    Are you a new member? <span><a href="../Sign_Up/Sign_Up.html" style={{ color: '#2190FF' }}> Sign Up Here</a></span>
                </div>
                <br />
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                            />
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                        <br />
                        <div className="login-text">
                            Forgot Password?
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
