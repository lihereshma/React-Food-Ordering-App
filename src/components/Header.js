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
    <div className="header p-4 shadow mb-4">
      <div className='max-w-screen-lg mx-auto flex justify-between items-center'>
        <div className="site-logo">
          <Link to='/'><img className="w-40" src={ FoodOrderLogo } alt="Logo" /></Link>
        </div>

        <div className="navbar">
          <ul className='flex'>
            {/* <li className='ml-2 mr-2'>Online Status: { onlineStatus ? "green" : "red" }</li> */}
            <li className='mr-2'><Link to='/'>Home</Link></li>
            {/* <li className='ml-2 mr-2'><Link to='/about'>About Us</Link></li>
            <li className='ml-2 mr-2'><Link to='/contact'>Contact Us</Link></li>
            <li className='ml-2 mr-2'><Link to='/grocery'>Grocery</Link></li> */}
            <li className='ml-2 mr-2'><Link to='/cart'>Cart ({cartItems.length} items)</Link></li>
            <li className='ml-2 mr-2'>
              <button className='login-btn' 
                onClick={() => { 
                  btnName === 'Login'
                  ? setBtnName('Logout') 
                  : setBtnName('Login');
                }}>
                    { btnName }
                </button>
              </li>
              <li className='ml-2'>{data.loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;