import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Dashboard/Dashboard";
import Register from "./Components/SignUp/Signup";
import Login from "./Components/Login/Login";
import Sales from "./Components/Report/Sales";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import Profile from "./Components/Profile/Profile";
import Canvas from "./Components/Canvas";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/products" element={<Products />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Canvas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
