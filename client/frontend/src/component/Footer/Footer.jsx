import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        {/* About Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">About Us</h2>
          <p className="text-white/90">
            We are a news aggregator providing the latest and most relevant news articles from around the world.
            Our mission is to keep you informed and up-to-date with the most important events and stories.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-white/90">
            <li>
              <strong>Email:</strong> support@newsfeed.com
            </li>
            <li>
              <strong>Phone:</strong> +91 8015773495
            </li>
            <li>
              <strong>Address:</strong> Erode City, Tamil Nadu
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-300 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 mt-6"></div>

      {/* Copyright */}
      <div className="text-center py-4 text-white/80 text-sm">
        &copy; {new Date().getFullYear()} NewsFeed. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
