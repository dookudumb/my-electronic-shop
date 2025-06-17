// src/pages/Payment.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "creditCard",
  });

  // Calculate the total price based on cart items
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    // Process payment here. For now, we'll log the form data and cart details.
    console.log("Payment Data Submitted:", formData, cartItems);
    alert("Payment submitted!");
  };

  return (
    <div className="payment-page">
      <h1>Payment</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/products">Shop now</Link>
        </p>
      ) : (
        <>
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} x {item.quantity} = $
                  {(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <Link to="/cart" className="edit-cart-link">
              Edit Cart
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="payment-form">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Payment Method:
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
              </select>
            </label>
            <button type="submit">Submit Payment</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Payment;
