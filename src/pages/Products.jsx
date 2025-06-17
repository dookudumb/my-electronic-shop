// src/pages/Products.jsx
import React, { useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || product.type === filterType;
    return matchesSearch && matchesType;
  });

  // Optionally, sort by sold numbers to highlight hot products
  filteredProducts.sort((a, b) => b.sold - a.sold);

  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={filterType} onChange={handleFilterChange}>
          <option value="All">All Types</option>
          <option value="Mobile">Mobile</option>
          <option value="Computers">Computers</option>
          <option value="Accessories">Accessories</option>
          {/* Add other product types as needed */}
        </select>
      </div>
      <div className="products-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
