import "./App.css";
import { items } from "./components/Data";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [data, setData] = useState([...items]);

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Product items={data} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search/:term" element={<SearchItem />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
