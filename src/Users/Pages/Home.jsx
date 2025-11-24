import React from 'react';
import Header from '../Components/Header';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header/>

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
      {/* new arrivals */}
      <section className="md:px-40 p-5 my-5 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">NEW ARRIVALS</h1>
        <h2 className="text-3xl">Explore Our Latest Collection</h2>

        <div className="md:grid grid-cols-4 w-full my-10">
          <div className="shadow rounded p-3 mx-4">
            <img width={'100%'} height={'300px'} src="img" alt="book" />

            <div className="flex flex-col justify-center items-center mt-4">
              <p className="text-blue-700 font-bold text-lg">Author Name</p>
              <p>Book Title</p>
              <p>₹ Discount Price</p>
            </div>
          </div>
        </div>

        <div className="text-center my-10">
          <Link
            to={'/all-books'}
            className="bg-blue-800 p-3 rounded text-white font-bold"
          >
            Explore More...
          </Link>
        </div>
      </section>

      {/* ...............  */}

      {/* author */}
      <section className="md: grid grid-cols-2 items-center gap-10 my-5 md: px-40 p-5">
        <div className="text-center">
          <h1 className="text-lg font-medium">FEATURED AUTHORS</h1>
          <h2 className="text-x1 ">Captivates with every word</h2>
          <p className="text-justify my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem excepturi numquam voluptas cumque! Provident ipsa
            obcaecati, aut id nesciunt amet rerum illo eum corrupti pariatur
            maxime deserunt placeat a necessitatibus!
          </p>
          <p className="text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            deserunt corporis assumenda commodi, vitae saepe aut tenetur facere
            illo excepturi, blanditiis ducimus voluptate quidem cum, odit animi
            quibusdam ab ullam.
          </p>
        </div>
        <div className="p-5 flex justify-center items-center">
          {' '}
          <img
            height={'200px'}
            src="https://i.pinimg.com/736x/04/4d/64/044d647c07066f927bac3f5d6c14d621.jpg"
            alt="autor"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
