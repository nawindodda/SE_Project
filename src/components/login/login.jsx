import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const Login = ({loggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const payload ={
        email: email,
        password: password
      }
      try {
        const response = await axios.post('http://localhost:5000/login', payload);
        toast.success('Logged in successfully!');
        navigate('/backeryItemsList');
        loggedIn(true)
        debugger
        console.log('vkbfhvbfhv', response)
      } catch (err) {
        debugger
        //toast.error('Data submitted successfully!');
        return;
      }
    };

    fetchData();
  };



  return (
    <div className="container bg-image">
      <ToastContainer/>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center">Bakery Shop Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className='d-flex'>
                <button type="submit" className="btn btn-primary btn-block mt-4">Login</button>&nbsp;
                <button type="submit" className="btn btn btn-block mt-4" style={{border:'1px solid #ccc'}}><Link to="/signup">Sign Up</Link></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
