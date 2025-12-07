import React from 'react';
import { BsCollection } from 'react-icons/bs';
import { CiHome, CiSettings } from 'react-icons/ci';
import { Link } from 'react-router-dom';

function Adminsidebar() {
  return (
    <div className="w-64 bg-blue-300 min-h-screen p-5">
      {/* Profile block */}
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/80"
          alt="admin"
          className="w-20 h-20 rounded-full"
        />
        <h1 className="mt-3 text-lg font-bold">Admin Name</h1>
      </div>

      {/* Sidebar menu */}
      <div className="mt-8 space-y-4 text-lg">
        <Link to="/admin" className="flex items-center gap-2">
          <CiHome size={22} /> Home
        </Link>

        <Link to="/admin-resources" className="flex items-center gap-2">
          <BsCollection size={22} /> Collections
        </Link>

        <Link to="/admin-settings" className="flex items-center gap-2">
          <CiSettings size={22} /> Settings
        </Link>
      </div>
    </div>
  );
}

export default Adminsidebar;
