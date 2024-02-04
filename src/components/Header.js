import FoodOrderLogo from '../images/food-logo.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="site-logo">
        <img src={ FoodOrderLogo } alt="Logo" />
      </div>

      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;