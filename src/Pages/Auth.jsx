import React, { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Auth = ({ register }) => {
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false);

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

              <div className="flex items-center">
                <input
                  placeholder="Password"
                  type={viewPasswordStatus ? 'text' : 'password'}
                  className="bg-white p-3 w-full rounded placeholder-gray-500 mb-3 text-black"
                />

                {!viewPasswordStatus ? (
                  <FaEye
                    onClick={() => setViewPasswordStatus(!viewPasswordStatus)}
                    style={{ marginLeft: '-30px' }}
                    className="text-gray-500 cursor-pointer"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setViewPasswordStatus(!viewPasswordStatus)}
                    style={{ marginLeft: '-30px' }}
                    className="text-gray-500 cursor-pointer"
                  />
                )}
              </div>

              <div>
                <p>never share pswrd with others</p>
                <button>forgot password</button>
              </div>

<div className="text-center">
  {
    register?
    <button className='bg-green-400'>register</button> :
    <button className='bg-green-400'>login</button>
  }
</div>



              <div className="my-5 text-center">
                {register ? (
                  <p className="text-blue-600">
                    Are you an already existing user?
                    <Link to="/login" className="underline ms-2">
                      Login
                    </Link>
                  </p>
                ) : (
                  <p className="text-blue-600">
                    Are you a new user?
                    <Link to="/register" className="underline ms-2">
                      Register
                    </Link>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
