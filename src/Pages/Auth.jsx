import React from 'react';
import { CiUser } from 'react-icons/ci';

const Auth = ({ register }) => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center flex-col bg-[url('https://i.pinimg.com/736x/04/69/43/04694308bd295274bed00679e53bf85c.jpg')] bg-cover bg-center">
        <div className="p-10">
          <h1 className="text-3xl font-bold text-white">Book Store</h1>

          <div className="bg-black bg-opacity-70 text-white p-5 flex flex-col justify-center items-center my-5 rounded">
            <div className="border border-white mb-5 flex justify-center items-center p-3 rounded-full">
              <CiUser className="text-3xl" />
            </div>

            <h1 className="text-2xl font-bold">
              {register ? 'Register' : 'Login'}
            </h1>

            <form className="my-5 w-full">
              {register && (
                <input
                  placeholder="Username"
                  type="text"
                  className="bg-white p-3 w-full rounded placeholder-gray-500 my-5 text-black"
                />
              )}

              <input
                placeholder="Email ID"
                type="email"
                className="bg-white p-3 w-full rounded placeholder-gray-500 mb-5 text-black"
              />

              <input
                placeholder="Password"
                type="password"
                className="bg-white p-3 w-full rounded placeholder-gray-500 mb-5 text-black"
              />

              <button className="bg-blue-700 w-full p-3 rounded font-bold">
                {register ? 'Register Now' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
