import { useState } from 'react';
import FoodOrderLogo from '../images/food-logo.jpg';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="site-logo">
        <img src={ FoodOrderLogo } alt="Logo" />
      </div>

      <div className="navbar">
        <ul>
          <li>Online Status: { onlineStatus ? "green" : "red" }</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button className='login-btn' 
              onClick={() => { 
                btnName === 'Login'
                ? setBtnName('Logout') 
                : setBtnName('Login');
              }}>
                  { btnName }
              </button>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;