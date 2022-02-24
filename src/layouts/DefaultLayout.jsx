import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Product from "../pages/Product";
import Navbar from "../components/Navbar";

export default function DefaulLayout() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}
