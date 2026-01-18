import React from "react";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaArrowUp
} from "react-icons/fa";
import { Link } from "react-router";
import logo from '../assets/eduverse-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-base-300 text-base-content relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 btn btn-primary btn-circle shadow-lg hover:scale-110 transition-transform"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img 
                src={logo} 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl" 
                alt="Eduverse logo" 
              />
              <span className="font-bold text-lg sm:text-xl text-primary">Eduverse</span>
            </div>
            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed mb-4 sm:mb-6">
              Empowering learners worldwide with high-quality online courses, expert instructors, 
              and a supportive community that grows together.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <FaEnvelope className="text-primary text-xs sm:text-sm" />
                <a 
                  href="mailto:support@eduverse.com" 
                  className="hover:text-primary transition-colors"
                >
                  support@eduverse.com
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <FaPhone className="text-primary text-xs sm:text-sm" />
                <a 
                  href="tel:+15551234567" 
                  className="hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <FaMapMarkerAlt className="text-primary text-xs sm:text-sm" />
                <span>123 Learning St, Education City, EC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-base-content mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-sm sm:text-base text-base-content/80 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/allcourse" 
                  className="text-sm sm:text-base text-base-content/80 hover:text-primary transition-colors"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link 
                  to="/addcourse" 
                  className="text-sm sm:text-base text-base-content/80 hover:text-primary transition-colors"
                >
                  Add Course
                </Link>
              </li>
              <li>
                <Link 
                  to="/mycourse" 
                  className="text-sm sm:text-base text-base-content/80 hover:text-primary transition-colors"
                >
                  My Courses
                </Link>
              </li>
              <li>
                <Link 
                  to="/profile" 
                  className="text-sm sm:text-base text-base-content/80 hover:text-primary transition-colors"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning Resources */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-base-content mb-3 sm:mb-4">
              Resources
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base text-base-content/80 hover:text-primary transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base text-base-content/80 hover:text-primary transition-colors"
                >
                  Student Guide
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base text-base-content/80 hover:text-primary transition-colors"
                >
                  Instructor Guide
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base text-base-content/80 hover:text-primary transition-colors"
                >
                  Community Forum
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm sm:text-base text-base-content/80 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Developer & Social Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-base-content mb-3 sm:mb-4">
              Connect With Us
            </h3>
            
            {/* Developer Info */}
            <div className="mb-4 sm:mb-6">
              <p className="text-sm sm:text-base text-base-content/80 mb-2 sm:mb-3">
                Developed by <span className="font-semibold text-primary">Juhaer Hakim</span>
              </p>
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <FaGlobe className="text-primary text-xs sm:text-sm" />
                <a 
                  href="https://portfolio-juhaer-hakim.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-base-content/80 hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <p className="text-sm sm:text-base text-base-content/80 mb-2 sm:mb-3">
                Follow the Developer:
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a 
                  href="https://www.linkedin.com/in/juhaer-hakim/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl text-base-content/60 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/juhaer009" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl text-base-content/60 hover:text-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.facebook.com/JH.Jafid/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl text-base-content/60 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://portfolio-juhaer-hakim.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl text-base-content/60 hover:text-primary transition-colors"
                  aria-label="Portfolio Website"
                >
                  <FaGlobe />
                </a>
              </div>
            </div>

            {/* Platform Social Links */}
            <div className="mt-4 sm:mt-6">
              <p className="text-sm sm:text-base text-base-content/80 mb-2 sm:mb-3">
                Follow Eduverse:
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a 
                  href="#" 
                  className="text-xl sm:text-2xl text-base-content/60 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="#" 
                  className="text-xl sm:text-2xl text-base-content/60 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-base-content/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-sm sm:text-base text-base-content/70 text-center sm:text-left">
              © {new Date().getFullYear()} Eduverse. All rights reserved. Built with ❤️ by{" "}
              <a 
                href="https://portfolio-juhaer-hakim.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Juhaer Hakim
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm">
              <a 
                href="#" 
                className="text-base-content/70 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-base-content/70 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-base-content/70 hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
