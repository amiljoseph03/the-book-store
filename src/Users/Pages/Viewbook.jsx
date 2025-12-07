import React from 'react'
import Header from '../Components/Header'
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoChevronBackCircle } from 'react-icons/io5';




function Viewbook() {
  return (
    <div>
      <Header />
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            <div className="col-span-1">

            </div>
            <div className="col-span-3">
              <div className="flex">
                <h1>title</h1>
                <button><FaEye/></button>

              </div>
              <p>author</p>
              <div className="md:grid">
                <p>publisher:publisher</p>
                <p>language : language</p>
                <p>no.of pages</p>
                <p>seller mail </p>
                <p>Real Price </p>
                <p>ISBN </p>
                <p>Category</p>
               
              </div>
              <div className="md:my-10my-4">
                <p>abstract</p>
              </div>
              <div className="flex justify-end">
                <Link to={'all-books'}><IoChevronBackCircle/> back</Link>
                <button>Buy $888</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewbook
