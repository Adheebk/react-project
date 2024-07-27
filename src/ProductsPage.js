import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
      <nav className="bg-gray-900 bg-opacity-80 p-4 shadow-md w-full">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className={`text-lg font-bold px-4 py-2 rounded-md ${
             'hover:bg-gray-700'
            } transition-colors duration-300`}
          >
            Home
          </Link>
          <div className="space-x-4">
            <Link
              to="/products"
              className={`text-lg px-4 py-2 rounded-md ${
                'hover:bg-gray-700'
              } transition-colors duration-300`}
            >
              Products
            </Link>
          </div>
        </div>
      </nav>

      <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-4xl mt-6">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
              <p className="text-gray-500 mb-2">Category: {product.category}</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">
                  {[...Array(Math.round(product.rating.rate))].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ))}
                </span>
                <span className="ml-2 text-gray-600">({product.rating.count} reviews)</span>
              </div>
              <Link
                to={`/product/${product.id}`}
                className="text-blue-500 hover:text-blue-700 text-lg"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
