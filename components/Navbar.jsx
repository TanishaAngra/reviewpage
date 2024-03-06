'use client';
import Link from 'next/link';

const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <h2 className="text-white text-2xl font-bold">Ayurveda.com</h2>
          </Link>
  
          <div className="space-x-4 ">
            <ul className="flex">
            <li className="mr-6"><Link href="/" className="text-white hover:text-cyan-400">
              Home
            </Link></li>
            <li className="mr-6"><Link href="/libout" className="text-white hover:text-cyan-400">
             About us
            </Link></li>
            <li className="mr-6"><Link href="/products" className="text-white hover:text-cyan-400">
             Our Products
            </Link></li>
            </ul>
          </div>
  
          <div className="space-x-4 ">
            <button className="text-white hover:text-black  bg-red-500 px-4 py-2 rounded">Login</button>
            <button className="text-white bg-green-500 px-4 py-2 rounded hover:text-black">
              Add a Review
            </button>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar