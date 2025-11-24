import React from 'react';
import Header from '../Components/Header';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* <Header/> */}

      {/* landing */}
      <div
        style={{ height: '500px' }}
        className="flex flex-col justify-center items-center bg-[url('https://www.entertales.com/wp-content/uploads/635841049393339322-1773368249_o-PILE-OF-BOOKS-facebook.jpg')] bg-cover bg-center text-white"
      >
        <div
          style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.5)' }}
          className="w-full flex flex-col justify-center items-center"
        >
          <h1 className="text-5xl font-bold">Wonderful Gifts</h1>
          <p>Give your family and friends a book</p>

          <div className="mt-9 flex">
            <input
              type="text"
              placeholder="Search Books"
              className="bg-white p-2 rounded-3xl placeholder-gray-500 w-full text-black"
            />
            <FaSearch
              className="text-gray-500"
              style={{ margin: '10px', fontSize: '30px' }}
            />
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
