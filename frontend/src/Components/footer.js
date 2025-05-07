import React from 'react'

const footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-black text-center text-sm text-white py-8 mt-12">
        {/* Copyright Text */}
        <p className="text-gray-200">&copy; {new Date().getFullYear()} Dr. Akshita's Dental Camp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default footer
