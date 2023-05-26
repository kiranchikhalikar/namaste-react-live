import { useState } from "react";
import foodwala from "../assets/img/foodwala.jpg";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Title = () => (
  <a href="/">
    <img src={foodwala} alt="logo" className="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      {<Title />}
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link> 
          <li>Cart</li>
        </ul>
      </div>
      {loggedInUser() ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
