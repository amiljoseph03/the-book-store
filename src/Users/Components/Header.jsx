// import React from 'react'

// import { Link } from 'react-router-dom';
// import { CiTwitter } from 'react-icons/ci';
// import { FaFacebookF } from 'react-icons/fa';
// import { CiUser } from 'react-icons/ci';
// import { FaBarsProgress } from 'react-icons/fa6';
// import { useState } from 'react';


// function Header() {

//     const[listStatus,setlistStatus]=useState(false)

//   return (
//     <>
//       <div className="grid grid-cols-3 p-3">
//         {/* logo */}
//         <img
//           src="https://png.pngtree.com/png-clipart/20240619/original/pngtree-open-book-logo-png-image_15366757.png"
//           alt="logo"
//           width={'50px'}
//           height={'50px'}
//         />

//         <h1 className="text-2xl font-bold ms-2 md:hidden"> BookStore </h1>

//         <div className="flex items-center">
//           {/* title */}
//           <h1 className="text-3xl font-bold">book store</h1>

//           <div className="md:flex justify-center items-center hidden"></div>
//           {/* login block  */}
//           <FaInstagram />
//           <CiTwitter />
//           <FaFacebookF />
//           {/* LOGIN LINK  */}
//           <Link to={'/login'}>
//             <button
//               className="border border-black flex *:rounded px-3 py-2 ms-3
//       hover:bg-black hover:text-white"
//             >
//               <CiUser /> Login
//             </button>
//           </Link>

//           {/* <div className="md:flex justify-end items-center hidden"></div> */}
//           <div className="relative inline-block text-left">
//             <button className="w-full bg-white px-3 py-2 shadow-xs ">
//               <img
//                 src=""
//                 alt="user"
//                 width={'40px'}
//                 height={'40px'}
//                 style={{ borderRadius: '50%' }}
//                 className="mx-2 "
//               />
//             </button>

//             <div
//               className="absolute right-0 z-10 mt-2 w-40
//             origin-top-right rounded-md bg-white shadow-lg
//             ring-black/5 focus:outline-hidden"
//             >
//               <div className="py-1">
//                 <Link
//                   className="block px-4 py-2 text-sm text-gray-700"
//                   to={'/profile'}
//                 >
//                   Profile
//                 </Link>
//                 <button className="block px-4 py-2 text-sm text-gray-700">
//                   logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <nav
//         className="w-full p-3 bg-black text-white md:flex
//       justify-center items-center"
//       >
//         {/* menubar nd login  */}
//         <div className="flex justify-between items-center text-2xl md:hidden">
//           <button onClick={()=>setlistStatus(!listStatus)}>
//             <FaBarsProgress className="text-white" />{' '}
//           </button>
//           <Link to={'/login'}>
//             <button
//               className="border border-black
//             rounded px-3 py-2 ms-3 hover:bg-black hover:text-white"
//             >
//               {' '}
//               <CiUser />
//               Login{' '}
//             </button>
//           </Link>

//           <div className="relative inline-block text-left">
//             <button
//               className="w-full px-3 py-2 bg-gray-500
//                 shadow-xs hover:bg-gray-50 rounded"
//             >
//               <img
//                 width={'40px'}
//                 height={'40px'}
//                 style={{ borderRadius: '50%' }}
//                 className="mx-2"
//                 src=""
//                 alt="user"
//               />
//             </button>
//           {/* {dropdownstatus && ( */}
//             <div
//               className="absolute right-0 z-10 mt-2 w-40
//                 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5
//                 focus:outline-hidden"
//             >
//               <div className="py-1">
//                 <Link
//                   className="block px-4 py-2 text-sm text-gray-700"
//                   to={'/profile'}
//                 >
//                   profile
//                 </Link>
//                 <button className="block px-4 py-2 text-sm text-gray-700">
//                   logout
//                 </button>
//               </div>
//               {/* )} */}
//             </div>
//           </div>
//         </div>

//         <ul className={listStatus?" flex flex-col" :"md:flex justify-center items-center hidden"}>
//             <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>Home</Link></li>
//             <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/all-books'}>Books</Link></li>
//             <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/careers'}>Careers</Link></li>
//             <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'}>Contact</Link></li>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Header






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
      {/* Top section */}
      <div className="grid grid-cols-3 p-3 items-center">
        {/* Logo */}
        <img
          src="https://png.pngtree.com/png-clipart/20240619/original/pngtree-open-book-logo-png-image_15366757.png"
          alt="logo"
          width="50"
          height="50"
        />

        {/* Mobile title */}
        <h1 className="text-2xl font-bold ms-2 md:hidden">BookStore</h1>

        {/* Header right side */}
        <div className="flex items-center justify-end gap-3">
          <h1 className="text-3xl font-bold hidden md:block">Book Store</h1>

          {/* Social Icons */}
          <FaInstagram />
          <CiTwitter />
          <FaFacebookF />

          {/* Login Button */}
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
              {/* <img
                src=""
                alt="user"
                width="40"
                height="40"
                style={{ borderRadius: '50%' }}
                className="mx-2"
              /> */}
            </button>

            {dropdownStatus && (
              <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    to="/profile"
                  >
                    Profile
                  </Link>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
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
        {/* Mobile Menu Toggle */}
        <div className="flex justify-between items-center text-2xl md:hidden">
          <button onClick={() => setListStatus(!listStatus)}>
            <FaBarsProgress className="text-white" />
          </button>

          <Link to="/login">
            <button className="border border-white rounded px-3 py-2 hover:bg-white hover:text-black flex items-center gap-1">
              <CiUser /> Login
            </button>
          </Link>
        </div>

        {/* Nav Links */}
        <ul
          className={
            listStatus
              ? 'flex flex-col text-center mt-3 md:mt-0'
              : 'md:flex justify-center items-center hidden'
          }
        >
          <li className="md:mx-4 mt-3 md:mt-0 hover:text-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="md:mx-4 mt-3 md:mt-0 hover:text-gray-300">
            <Link to="/all-books">Books</Link>
          </li>
          <li className="md:mx-4 mt-3 md:mt-0 hover:text-gray-300">
            <Link to="/career">Careers</Link>
          </li>
          <li className="md:mx-4 mt-3 md:mt-0 hover:text-gray-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

