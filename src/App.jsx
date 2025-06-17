// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import "./index.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="hide-scrollbar">
          <div className="app-container">
            <Navbar />
            <main style={{ minHeight: "80vh", padding: "20px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
