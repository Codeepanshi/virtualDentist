import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 

const footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-black text-center text-sm text-white py-8 mt-12">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-200">&copy; {new Date().getFullYear()} Dr. Akshita's Dental Camp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default footer