// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-section navbar-left">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-section navbar-center">
        <Link to="/" className="navbar-logo">
          <img src="/dxlogo.jpg" alt="Logo" className="logo-image" />
        </Link>
      </div>

      <div className="navbar-section navbar-right">
        <ul className="navbar-links">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/payment">Payment</Link>
          </li>
          <li style={{ position: "relative" }}>
            <Link to="/cart">
              Cart
              {totalCount > 0 && (
                <span className="cart-badge">{totalCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
