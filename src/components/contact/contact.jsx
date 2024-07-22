import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    const postOrder = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/contactus",
          payload
        );
        toast.success('Conatct information successfully sent!');
      } catch (err) {
        return;
      }
    };

    postOrder();
  };

  return (
    <div className="container mt-5">
      <ToastContainer/>
<h3 className="mb-3" style={{ color: "#14738c" }}>
        Contact Us
      </h3>      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel" 
            className="form-control" 
            id="phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Enter your phone number" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            rows="5" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Enter your message" 
            required 
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
