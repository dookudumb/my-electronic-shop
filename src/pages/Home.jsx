// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => {
  return (
    <div>
      <div className="home">
        <h1>Welcome to Electronic Shop!</h1>
        <p>Your one-stop shop for the latest electronic gadgets.</p>
        <img
          src="/home.jpg"
          alt="Shop introduction"
          style={{ maxWidth: "80%" }}
        />
      </div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>Developed and maintained by DX-Lab</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Developed and maintained by DX-Lab</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Developed and maintained by DX-Lab</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Developed and maintained by DX-Lab</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
