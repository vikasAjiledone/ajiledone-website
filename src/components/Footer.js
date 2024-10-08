import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Ajiledone Technologies</h1>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#services" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="#contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-6">
        <p>© 2020 Ajiledone Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
