import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white mt-5 pt-5">
      <div className="container mx-auto px-4">
        {/* Grid for Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Intro Section */}
          <div className="mb-8">
            <h5 className="text-2xl font-bold mb-4">
              Sporty Blog <i className="fa-solid fa-volleyball"></i>
            </h5>
            <p className="text-sm mb-2">
              Designed and built with all the love in the world by the Tailwind team with the help of our contributors.
            </p>
            <p className="text-sm mb-2">Code licensed MIT, docs CC BY 3.0.</p>
            <p className="text-sm">Currently v5.3.3.</p>
          </div>

          {/* Links Section */}
          <div className="mb-8">
            <h5 className="text-xl font-bold mb-4">Links</h5>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:underline">Home Page</Link>
              <Link to="/login" className="hover:underline">Login Page</Link>
              <Link to="/register" className="hover:underline">Register</Link>
              <Link to="/all-post" className="hover:underline">All Posts</Link>
              <Link to="/my-profile/:id" className="hover:underline">My Profile</Link>
            </div>
          </div>

          {/* Guides Section */}
          <div className="mb-8">
            <h5 className="text-xl font-bold mb-4">Guides</h5>
            <div className="flex flex-col space-y-2">
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline">React</a>
              <a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer" className="hover:underline">React Router</a>
              <a href="https://react-bootstrap.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">React Bootstrap</a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Reach Me</h2>
            <div className="flex space-x-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter text-2xl hover:text-blue-400"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram text-2xl hover:text-pink-500"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook text-2xl hover:text-blue-600"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin text-2xl hover:text-blue-700"></i>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github text-2xl hover:text-gray-400"></i>
              </a>
              <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-phone text-2xl hover:text-green-500"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <p className="text-center mt-8 pb-4 text-sm">
          Copyright &copy; July 2024 Batch, Sporty Blog App.
        </p>
      </div>
    </div>
  );
};

export default Footer;