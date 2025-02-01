import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { cart, user } = useContext(GlobalContext); // Assuming user data is available in context

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <h2>AishKIcart</h2>
      </Link>
      <ul className="navbar-ul">
        <li><Link to="/necklaces">Necklace</Link></li>
        <li><Link to="/rings">Ring</Link></li>
        <li><Link to="/bracelets">Bracelets</Link></li>
        <li><Link to="/brands">Brands</Link></li>
        
        <li>
          <Link to="/cart" aria-label="View Cart">
            &#128722; <span className="cart-count" style={{ color: "red" }}>({cart.length})</span>
          </Link>
        </li>
        
        <li>
          <Link to="/orders">Orders</Link>
        </li>

        <li>
          <input type="text" className="search-bar" placeholder="Search products..." />
        </li>

        <li>
          <Link to="/notifications" aria-label="View Notifications">
            🔔
          </Link>
        </li>

        <button className="nav-btn">
          {user?.avatar ? (
            <img src={user.avatar} alt="User Avatar" className="user-avatar" />
          ) : (
            "Welcome"
          )}
          {user?.name && <span>, {user.name}</span>}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
