import React from 'react'
import { CiTwitter } from 'react-icons/ci';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="grid grid-cols-3 p-3">
      {/* logo */}
      <img
        src="https://png.pngtree.com/png-clipart/20240619/original/pngtree-open-book-logo-png-image_15366757.png"
        alt="logo"
        width={'50px'}
        height={'50px'}
      />

      <h1 className="text-2xl font-bold ms-2 md:hidden"> BookStore </h1>

      <div className="flex items-center">
        {/* title */}
        <h1 className="text-3xl font-bold">book store</h1>

        <div className="md:flex justify-center items-center hidden"></div>
        {/* login block  */}
        <FaInstagram />
        <CiTwitter />
        <FaFacebookF />
        {/* LOGIN LINK  */}
        <Link to={'/login'}>
          <button
            className="border border-black flex *:rounded px-3 py-2 ms-3
      hover:bg-black hover:text-white"
          >
            <CiUser /> Login
          </button>
        </Link>

        {/* <div className="md:flex justify-end items-center hidden"></div> */}
        <div className="relative inline-block text-left"></div>
      </div>
      </div>
    </>
  );
}

export default Header
