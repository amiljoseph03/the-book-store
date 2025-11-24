import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiTwitter, CiUser } from 'react-icons/ci';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaBarsProgress } from 'react-icons/fa6';

function Header() {
  const [listStatus, setListStatus] = useState(false);
  const [dropdownStatus, setDropdownStatus] = useState(false);

  return (
    <>
      {/* Header Top */}
      <div className="grid grid-cols-3 p-3 items-center">
        {/* Logo */}
        <img
          src="https://png.pngtree.com/png-clipart/20240619/original/pngtree-open-book-logo-png-image_15366757.png"
          alt="logo"
          width="50"
          height="50"
        />

        {/* Title (Mobile Only) */}
        <h1 className="text-2xl font-bold ms-2 md:hidden">BookStore</h1>

        {/* Right Side Icons + Login + Profile Dropdown */}
        <div className="flex items-center justify-end gap-3">
          <h1 className="text-3xl font-bold hidden md:block">Book Store</h1>

          {/* Social Icons */}
          <FaInstagram />
          <CiTwitter />
          <FaFacebookF />

          {/* Login */}
          <Link to="/login">
            <button className="border border-black rounded px-3 py-2 hover:bg-black hover:text-white flex items-center gap-1">
              <CiUser /> Login
            </button>
          </Link>

          {/* Profile Dropdown */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => setDropdownStatus(!dropdownStatus)}
              className="w-full bg-white px-3 py-2 shadow-sm rounded"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                alt="user"
                width="40"
                height="40"
                style={{ borderRadius: '50%' }}
              />
            </button>

            {dropdownStatus && (
              <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
                <div className="py-1">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    to="/profile"
                  >
                    Profile
                  </Link>
                  <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full p-3 bg-black text-white md:flex justify-center items-center">
        {/* Mobile Menu */}
        <div className="flex justify-between items-center text-2xl md:hidden w-full">
          <button onClick={() => setListStatus(!listStatus)}>
            <FaBarsProgress className="text-white" />
          </button>

          {/* Mobile Login */}
          <Link to="/login">
            <button className="border border-white rounded px-3 py-2 hover:bg-white hover:text-black flex items-center gap-1">
              <CiUser /> Login
            </button>
          </Link>

          {/* Mobile Profile */}
          <div className="relative inline-block text-left">
            <button className="w-full px-3 py-2 bg-gray-500 shadow-xs hover:bg-gray-50 rounded">
              <img
                width="40"
                height="40"
                style={{ borderRadius: '50%' }}
                src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                alt="user"
              />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <ul
          className={
            listStatus
              ? 'flex flex-col mt-3 md:hidden'
              : 'md:flex justify-center items-center hidden'
          }
        >
          <li className="md:mx-4 mt-3 md:mt-0">
            <Link to="/">HOME</Link>
          </li>
          <li className="md:mx-4 mt-3 md:mt-0">
            <Link to="/all-books">BOOKS</Link>
          </li>
          <li className="md:mx-4 mt-3 md:mt-0">
            <Link to="/careers">CAREERS</Link>
          </li>
          <li className="md:mx-4 mt-3 md:mt-0">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
