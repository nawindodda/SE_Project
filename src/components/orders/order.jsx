import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const bakeryItems = [
  {
    name: "Chocolate Cake",
    price: "$4.00",
    imageUrl: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb",
    quantity: 2,
  },
  {
    name: "Vanilla Cake",
    price: "$3.75",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    quantity: 1,
  },
  {
    name: "Red Velvet Cake",
    price: "$4.50",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    quantity: 3,
  },
]
const Orders = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    const postOrder = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/order-confirmation",
          payload
        );
        toast.success('Order Placed successfully!');
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
        Order Confirmation
      </h3>
      <div className="row">
        {bakeryItems && bakeryItems.length>0 && bakeryItems.map((item, index) => (
          <div className="col-md-4 col-sm-6 my-2" key={item.name}>
            <div className="card h-100">
              <img
                height={200}
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  {item.price} Total Count:{" "}
                  <span className="mx-2">{item.quantity}</span>
                </p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group sm-6">
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
          <label htmlFor="message">Address</label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Orders;
