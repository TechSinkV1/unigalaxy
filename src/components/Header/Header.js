import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-green-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link to="/" className="flex items-center mb-4 md:mb-0">
            <span><span className="text-7xl text-green-600">U</span><span className="text-2xl text-gray-700">nigalaxy</span></span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/home" className="mr-5 hover:text-gray-900 text-2xl">Home</Link>
          <Link to="/courses" className="mr-5 hover:text-gray-900 text-2xl">Courses</Link>
          <Link to="/aboutus" className="mr-5 hover:text-gray-900 text-2xl">About Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
