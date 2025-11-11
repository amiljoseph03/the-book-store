import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/cb/64/7e/cb647e178bbccfb7498002aa2d070f18.jpg')",
          height: '500px',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text & Search Box */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-3">Wonderful Gifts</h1>
          <p className="mb-5 text-lg">
            Give your family and friends the gift of reading
          </p>

          <div className="mt-3 flex justify-center items-center">
            <input
              className="bg-white p-2 rounded-3xl placeholder-gray-500 text-black w-64"
              type="text"
              placeholder="Search a book"
            />
            <FaSearch className="text-gray-300 ml-3 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <section className="py-10 text-center">
        <h1 className="text-3xl font-bold mb-2">New Arrivals</h1>
        <p className="text-gray-700 mb-8">Explore our latest collection</p>

        <div className="flex justify-center">
          <div className="shadow-lg p-5 rounded-xl bg-white">
            <img
              src="https://i.pinimg.com/736x/cb/64/7e/cb647e178bbccfb7498002aa2d070f18.jpg"
              alt="book"
              className="w-48 h-64 object-cover rounded-xl mb-3"
            />
            <div className="text-gray-800">
              <p className="font-semibold">J.K. Rowling</p>
              <p className="text-sm italic">Harry Potter</p>
              <p className="text-green-600 font-bold">₹499</p>
            </div>
          </div>
        </div>

        <div className="text-center my-10">
          <Link
            to="/all-books"
            className="text-blue-500 hover:text-blue-700 underline font-semibold"
          >
            Explore more...
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
