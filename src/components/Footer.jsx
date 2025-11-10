import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../assets/eduverse-logo.png'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-8 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* --- Logo and Description --- */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} className="w-20 h-18 rounded-2xl" alt="Eduverse logo" />
            <span className="font-bold text-xl">Eduverse</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Empowering learners worldwide with high-quality online courses and a
            community that grows together.
          </p>
        </div>

        {/* --- Navigation Links --- */}
        <div>
          <h3 className="footer-title mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover">Home</a>
            </li>
            <li>
              <a className="link link-hover">Courses</a>
            </li>
            <li>
              <a className="link link-hover">About Us</a>
            </li>
            <li>
              <a className="link link-hover">Contact</a>
            </li>
          </ul>
        </div>

        {/* --- Social Media --- */}
        <div>
          <h3 className="footer-title mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-primary transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-base-300 mt-8 pt-6 text-sm text-center opacity-70">
        © {new Date().getFullYear()} Eduverse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
