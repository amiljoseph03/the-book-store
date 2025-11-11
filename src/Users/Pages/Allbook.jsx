import React from 'react'
import Header from '../Components/Header'
import { FaBarsProgress } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Allbook() {
  return (
    <>
      {/* < Header/> */}

      <div className="flex justify-center items-center flex-col my-5">
        <h1 className='text-3xl font-bold my-5'>Collections</h1>
        <div className="flex my-5">
          <input type="text" name="" id=""
          className='p-2 border border-gray-200 text-black w-100 placeholder-gray-600' 
          placeholder='search by title'/>
          <button className='bg-blue-900 text-white p-2'>Search</button>
        </div>
      </div>
      {/* grid  */}
      <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
        {/* filter  */}
        <div className="col-span-1">
          <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>Filter</h1>
            <button className='text-2xl md:hidden'><FaBarsProgress/></button>
          </div>
          <div className="md:block hidden">
            <div className="mt-3"></div>
          </div>
        </div>

        {/* books  */}
        <div className="col-span-3">
          <div className="md:grid grid-cols-4"></div>
        
        
        
        <p>book</p>
        <Link to={'/all-books/:id/view'}/>
        
        </div>
      </div>
    </>
  )
}

export default Allbook
