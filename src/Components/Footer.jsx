import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-8 px-2 ">
      <div className="max-w-7xl container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Roadmaps
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Documentation
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Tutorials
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                E-books
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Webinars
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 text-gray-800 border border-gray-300 rounded-md"
            />
            <button className="bg-gray-700 hover:bg-gray-900 rounded-md text-white py-2 px-4 w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 font-medium">
        <p>
          &copy; {new Date().getFullYear()} GurkhaGeeks✓. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
