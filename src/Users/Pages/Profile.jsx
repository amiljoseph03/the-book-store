import React, { useState } from 'react';
import Header from '../Components/Header';
import { FaCircleCheck } from 'react-icons/fa6';
import Edit from '../Components/Edit';

function Profile() {
  const [userDP, setUserDP] = useState('');
  const [username, setUsername] = useState('John Doe');
  const SERVERURL = 'http://localhost:5000';

  const [sellBookStatus, setSellBookStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseBookStatus, setPurchaseBookStatus] = useState(false);

  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className="bg-black"></div>

      {/* Profile Image */}
      <div
        style={{
          width: '230px',
          height: '230px',
          borderRadius: '50%',
          marginLeft: '70px',
          marginTop: '-130px',
        }}
        className="bg-white p-3"
      >
        <img
          style={{ width: '200px', height: '200px', borderRadius: '50%' }}
          src={
            userDP === ''
              ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
              : userDP.startsWith('https://lh3.googleusercontent.com/')
              ? userDP
              : `${SERVERURL}/uploads/${userDP}`
          }
          alt="profile"
        />
      </div>

      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className="font-bold md:text-3xl text-2xl">{username}</h1>
          <FaCircleCheck className="text-blue-400 ml-3" />
        </div>
        <Edit />
      </div>

      <p className="md:px-20 px-5 my-5 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        excepturi ex delectus accusantium nemo, perspiciatis pariatur quo
        explicabo facilis sed blanditiis, ullam neque labore expedita qui itaque
        unde, repudiandae esse. <br /> <br />
        <strong>YOUR TRUST</strong> <br />
        <strong>EXPONENTIALLY GROWS HERE.</strong>
      </p>

      <div className="md:px-40">
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p
            onClick={() => {
              setSellBookStatus(true);
              setBookStatus(false);
              setPurchaseBookStatus(false);
            }}
            className={
              sellBookStatus
                ? 'text-blue-500 p-4 border-gray-200 border-t border-r rounded cursor-pointer'
                : 'p-4 border-b border-gray-200 cursor-pointer'
            }
          >
            Sell Books
          </p>
          <p
            onClick={() => {
              setBookStatus(true);
              setSellBookStatus(false);
              setPurchaseBookStatus(false);
            }}
            className={
              bookStatus
                ? 'text-blue-500 p-4 border-gray-200 border-t border-r rounded cursor-pointer'
                : 'p-4 border-b border-gray-200 cursor-pointer'
            }
          >
            Book Status
          </p>
          <p
            onClick={() => {
              setPurchaseBookStatus(true);
              setBookStatus(false);
              setSellBookStatus(false);
            }}
            className={
              purchaseBookStatus
                ? 'text-blue-500 p-4 border-gray-200 border-t border-r rounded cursor-pointer'
                : 'p-4 border-b border-gray-200 cursor-pointer'
            }
          >
            Purchased Books History
          </p>
        </div>
      </div>

      {/* Sell Book Form */}
      {sellBookStatus && (
        <div className="p-10 my-20 mx-5 bg-gray-200">
          <div className="text-center text-3xl font-medium">Book Details</div>
          <div className="md:grid grid-cols-2 mt-10 w-full">
            <div className="px-3">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full p-2 rounded placeholder-gray-400 text-black bg-white"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Author"
                  className="w-full p-2 rounded placeholder-gray-400 text-black bg-white"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="No. of books"
                  className="w-full p-2 rounded placeholder-gray-400 text-black bg-white"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Image URL"
                  className="w-full p-2 rounded placeholder-gray-400 text-black bg-white"
                />
              </div>
            </div>

            <div className="px-3"></div>
          </div>

          {/* Footer */}
          <div className="p-3 w-full flex md:justify-end justify-center mt-8">
            <button className="py-2 px-3 rounded bg-gray-600 text-white hover:bg-white hover:border hover:text-black">
              Reset
            </button>
            <button className="py-2 px-3 rounded bg-blue-900 text-white ms-3 hover:bg-white hover:border hover:text-blue-600 hover:border-blue-600">
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
