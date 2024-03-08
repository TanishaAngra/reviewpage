"use client";
import { showHideReview } from "@/redux/reviewSlice/reviewSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const dispatch = useDispatch();

  const onReviewClick = () => {
    if(navbar) setNavbar(!navbar)
    dispatch(showHideReview(true));
  };

  return (
    <div>
      <nav className=" w-full h-max bg-slate-900 p-2">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* logo */}
            <Link href="/">
              <h2 className="text-white text-2xl font-bold ">Ayurveda.com</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src="/Cross_icon_(white).svg.png"
                    width={30}
                    height={30}
                    alt="logo"
                  />
                ) : (
                  <Image
                    src="/108564673-hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.jpeg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0    border-black hover:text-green-200 md:hover:text-black md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0    border-black hover:text-green-200 md:hover:text-black md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  h  border-black hover:text-green-200 md:hover:text-black md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Our Products
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0    border-black  md:hover:text-black md:hover:bg-transparent">
                  <button className="text-white hover:text-black  bg-blue-400 px-4 py-2 rounded" onClick={() => setNavbar(!navbar)}>
                    Login
                  </button>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0   border-black  md:hover:text-black md:hover:bg-transparent">
                  <button
                    className="text-white bg-blue-400 px-4 py-2 rounded hover:text-black"
                    onClick={onReviewClick}
                  >
                    Add a Review
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
