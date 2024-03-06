'use client';
import React from 'react'

const footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Ayurveda.com. All rights reserved.</p>
          </div>
          <div>
            <button className="bg-blue-500 text-white hover:text-black px-4 py-2 rounded">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default footer