import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 flex justify-between">
      <div className="container mx-auto text-center m-2 ">
        {/* Main Footer Text */}
        <p className="text-lg mb-4">Ready to get started?</p>
        
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-200">
          Get Started
        </button>

        {/* Copyright */}
        <p className="text-sm mt-6 mb-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>

      {/* Footer Links */}
      <div className="grid space-x-6 mx-4 px-5">
        <a href="/privacy" className="text-gray-400 hover:text-white transition duration-200">Privacy Policy</a>
        <a href="/terms" className="text-gray-400 hover:text-white transition duration-200">Terms of Service</a>
        <a href="/product" className="text-gray-400 hover:text-white transition duration-200">Product</a>
        <a href="/course" className="text-gray-400 hover:text-white transition duration-200">Course</a>  
      </div>
    </footer>
  );
};

export default Footer;
