import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const fetchTotalProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8888/api/product");
        if (response.data && Array.isArray(response.data)) {
          setTotalProducts(response.data.length);
        }
      } catch (error) {
        console.error("Error fetching product count:", error);
      }
    };

    fetchTotalProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="home">
        <h2>Welcome Admin </h2>
        {/* <p></p>               aama je admin ae sigin karyu hoy aenu email saw thavu */}
 
        <div className="home-container">
          <div className="home-box">
            <p>Total Users</p>
            <span>1,234</span>
          </div>

          <div className="home-box">
            <p>Total Products</p>
            <span>{totalProducts}</span>
          </div>

          <div className="home-box">
            <p>Total Orders</p>
            <span>890</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
