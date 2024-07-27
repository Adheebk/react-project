import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 text-white">
      <nav className="bg-gray-900 bg-opacity-80 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className={`text-lg font-bold px-4 py-2 rounded-md ${
              currentPath === '/' ? 'bg-blue-700' : 'hover:bg-gray-700'
            } transition-colors duration-300`}
          >
            Home
          </Link>
          <div className="space-x-4">
            <Link
              to="/products"
              className={`text-lg px-4 py-2 rounded-md ${
                currentPath.startsWith('/products') ? 'bg-blue-700' : 'hover:bg-gray-700'
              } transition-colors duration-300`}
            >
              Products
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-col justify-center items-center flex-grow p-6">
        <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Home Page</h1>
          <p className="text-lg mb-6">Welcome to the home page!</p>
          <Link
            to="/products"
            className="text-blue-300 hover:text-blue-400 underline text-lg"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
