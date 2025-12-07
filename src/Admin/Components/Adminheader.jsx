import React from 'react';

function Adminheader() {
  const logout = () => {
    console.log('Logged out');
  };

  return (
    <div>
      <div className="flex justify-between items-center p-3 md:px-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            width="50px"
            height="50px"
            src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png"
            alt="logo"
          />
          <h1 className="text-2xl font-bold ml-2">BOOKSTORE</h1>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="border border-black rounded px-3 py-2 ml-3 hover:bg-black hover:text-white transition"
        >
          Logout
        </button>
      </div>

      {/* Moving Text */}
      <div className="w-full p-3 bg-black text-white">
        <marquee className="tracking-wide">
          Welcome to Admin Dashboard...
        </marquee>
      </div>
    </div>
  );
}

export default Adminheader;
