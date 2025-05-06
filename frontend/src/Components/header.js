import React from 'react'
import logo from '../assest/companyLogo.png';

const Header = () => {
  return (
    <div className="bg-black py-6 px-4 md:py-10 md:px-12">
      <header className="text-center">
        <img
          src={logo}
          alt="Clinic Logo"
          className="mx-auto w-20 h-20"
        />
        <h1 className="text-2xl md:text-4xl font-bold text-white mt-3">
          Free Virtual Dental Camp
        </h1>
        <p className="text-sm md:text-base text-gray-300">
          Submit your dental concerns and get expert advice from our certified dentist — all from the comfort of your home.
        </p>
      </header>
    </div>
  )
}

export default Header;
