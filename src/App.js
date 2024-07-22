import "./App.css";
import React, { useState } from "react";
import Sidenav from "./side-nav/sidenav";
import "bootstrap/dist/css/bootstrap.min.css";
import BackeryItemsList from "./components/backery-items-list/bakeryItemsList"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/sign-up/signUp";
import EmployeeSchedule from './components/employees/employees'
import CustomerFeedback from './components/customer-feedback/customerFeedback'
import IngredientsTable from './components/inventory/ingredients'
import ContactUs from './components/contact/contact'
import Orders from './components/orders/order'
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const loggedIn = (bool) => {
    setIsLogged(bool);
  };
  return (
    <React.Fragment>
      {isLogged ? (
        <Router>
          <div className="app">
            <div className="row m-0">
              <div className="col-1">
                <Sidenav loggedIn={loggedIn}/>
              </div>
              <div className="content col-11">
                {/* <div className="search-container mt-4 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search for patient"
                id="searchInput"
              />
              <button className="btn clear-btn">
                ×
              </button>
            </div> */}
                <div className="sticky-top"></div>
                <Routes>
                  <Route path="/backeryItemsList" element={<BackeryItemsList />} />
                  <Route path="/ingredients" element={<IngredientsTable/>} />
                  <Route path="/employees-shifts" element={<EmployeeSchedule/>} />
                  <Route path="/customer-feedback" element={<CustomerFeedback/>} />
                  <Route path="/contactus" element={<ContactUs/>} />
                  <Route path="/orders" element={<Orders/>} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      ) : (
        <div className="app" style={{height: "100vh"}}>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login loggedIn={loggedIn} />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </div>
          </Router>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
