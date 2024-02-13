import { useContext, useState } from 'react';
import FoodOrderLogo from '../images/food-logo.jpg';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <div className="header flex justify-between p-4 shadow mb-4">
      <div className="site-logo">
        <img className="w-40" src={ FoodOrderLogo } alt="Logo" />
      </div>

      <div className="navbar">
        <ul className='flex'>
          <li>Online Status: { onlineStatus ? "green" : "red" }</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
          <li><Link to='/cart'>Cart ({cartItems.length} items)</Link></li>
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
            <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;