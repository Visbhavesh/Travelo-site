import React from "react";
import  Logo1 from "./Logotravel.jpg";
import "./Navbar.css";
import { Routes, Route, useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
export const Navi = () => {
  const navigate=useNavigate();
  const handleLogout = () => {
    
   
    localStorage.removeItem('userDetails');
    localStorage.removeItem('accessToken');
    navigate('/login');



  };
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center text-white mr-6">
          <img className="w-40 h-14" src={Logo1} alt="Logo" />
        </Link>

        <nav className="md:ml-auto flex items-center text-base">
          <Link to="/" className="text-white hover:text-gray-300 px-4 py-2 rounded transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 px-4 py-2 rounded transition duration-300">
            About
          </Link>
          <Link to="/product" className="text-white hover:text-gray-300 px-4 py-2 rounded transition duration-300">
            Products
          </Link>
          {/* Add more links as needed */}
        </nav>

        <button
          className="text-gray-100 bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded transition duration-300"
          onClick={handleLogout}
        >
          Logout
          {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> */}
        </button>
      </div>
    </div>
  );
};
