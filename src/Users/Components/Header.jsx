import React from 'react'

import { Link } from 'react-router-dom';
import { CiTwitter } from 'react-icons/ci';
import { FaFacebookF } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import { FaBarsProgress } from 'react-icons/fa6';

function Header() {

    const[listStatus,setlistStatus]=useState(false)
    
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
          <div className="relative inline-block text-left">
            <button className="w-full bg-white px-3 py-2 shadow-xs ">
              <img
                src=""
                alt="user"
                width={'40px'}
                height={'40px'}
                style={{ borderRadius: '50%' }}
                className="mx-2 "
              />
            </button>

            <div
              className="absolute right-0 z-10 mt-2 w-40
            origin-top-right rounded-md bg-white shadow-lg
            ring-black/5 focus:outline-hidden"
            >
              <div className="py-1">
                <Link
                  className="block px-4 py-2 text-sm text-gray-700"
                  to={'/profile'}
                >
                  Profile
                </Link>
                <button className="block px-4 py-2 text-sm text-gray-700">
                  logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="w-full p-3 bg-black text-white md:flex
      justify-center items-center"
      >
        {/* menubar nd logi n  */}
        <div className="flex justify-between items-center text-2xl md:hidden">
          <button>
            <FaBarsProgress className="text-white" />{' '}
          </button>
          <Link to={'/login'}>
            <button
              className="border border-black
            rounded px-3 py-2 ms-3 hover:bg-black hover:text-white"
            >
              {' '}
              <CiUser />
              Login{' '}
            </button>
          </Link>

          <div className="relative inline-block text-left">
            <button
              className="w-full px-3 py-2 bg-gray-500
                shadow-xs hover:bg-gray-50 rounded"
            >
              <img
                width={'40px'}
                height={'40px'}
                style={{ borderRadius: '50%' }}
                className="mx-2"
                src=""
                alt="user"
              />
            </button>
            dropdownstatus &&
            <div
              className="absolute right-0 z-10 mt-2 w-40
                origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5
                focus:outline-hidden"
            >
              <div className="py-1">
                <Link
                  className="block px-4 py-2 text-sm text-gray-700"
                  to={'/profile'}
                >
                  profile
                </Link>
                <button className="block px-4 py-2 text-sm text-gray-700">
                  logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <ul className="md:flex justify-center items-center hidden">
            <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>Home</Link></li>
            <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/all-books'}>Books</Link></li>
            <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/careers'}>Careers</Link></li>
            <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Header
