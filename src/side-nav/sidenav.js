import React from 'react';
import {
  Link
} from 'react-router-dom';
import './sidenav.css';
import Icon1 from '../assets/menu-icons/Icon4.png'
import Icon2 from '../assets/menu-icons/Icon (2).png'
import Icon3 from '../assets/menu-icons/Icon (1).png'
import Icon4 from '../assets/menu-icons/Globe.png'
import Icon5 from '../assets/menu-icons/Icon.png'
import { useLocation } from 'react-router-dom';

const  Sidenav = ({loggedIn}) => {
  const location = useLocation();
const logout = () =>{
  loggedIn(false)
}
  return (
    <div className="sidebar sticky-top">
    <ul>
    <ul>
        <li><Link to="/backeryItemsList"><img src={Icon1} alt=''/></Link></li>
        <li><Link to="/ingredients" className={location.pathname.slice(1).length===0?'selcted':''}><img src={Icon4} alt=''/></Link></li>
        <li><Link to="/employees-shifts" className={location.pathname.includes('Patients-data')?'selcted':''}><img src={Icon5} alt=''/></Link></li>
        <li><Link to="/customer-feedback"><img src={Icon3} alt=''/></Link></li>
        <li><Link to="/contactus"><img src={Icon2} alt=''/></Link></li>
        <li onClick={logout}><Link to="/login"><i className="bi bi-box-arrow-right"></i></Link></li>
      </ul>
    </ul>
  </div>
);
}

export default Sidenav;