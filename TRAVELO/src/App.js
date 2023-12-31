


// export default App;
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Login } from "./components/Login/Login";
import { Home } from "./Home";
import { Product } from "./Product";
import { About } from "./About";

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={accessToken ? <Home /> : <Login />}
      />
      <Route
        path="/product"
        element={accessToken ? <Product /> : <Login />}
      />
       <Route
        path="/about"
        element={accessToken ? <About /> : <Login />}
      />
    </Routes>
  );
}

export default App;

