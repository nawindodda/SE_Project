import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signUp.css';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange1 = (e) =>{
    setRole(e.target.value)
  }

  const validate = () => {
    const errors = {};
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    } 
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:5000/signup', formData);
          toast.success('User Created successfully!');
          navigate('/login');
          // setData(response.data);
        } catch (err) {
          //toast.error('Data submitted successfully!');
          return;
        }
      };
  
      fetchData();
      console.log('Form data:', formData);
      // Submit form data to the server
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-image">
    <div className="sign-up-container">
      <ToastContainer/>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <div>
                <label>
                    <input
                        type="radio"
                        value="user"
                        checked={role === 'user'}
                        onChange={handleChange1}
                    />
                    &nbsp;&nbsp;User
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="admin"
                        checked={role === 'admin'}
                        onChange={handleChange1}
                    />
                    &nbsp;&nbsp;Admin
                </label>
            </div>
        <button type="submit" className="btn btn btn-block mt-4" style={{border:'1px solid #ccc'}}>Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
