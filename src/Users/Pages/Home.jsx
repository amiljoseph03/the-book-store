
import React from 'react';
import Header from '../Components/Header';
function Home() {
  return (
    <>
      <Header />
      <div
        style={{ height: '500px' }}
        className="flex flex-col justify-center items-center
      bg-[url()]
      bg-cover bg-centertext-white"
      >
        <div style={{ height: '500px', backgroundColor:'black' }} 
        className="w-full flex flex-col justify-center items-center">
          <h1 className='text-5xl font-bold'>wonderful gifts</h1>
          <p>give your familiy and friends</p>
          <div className="mt-9 flex">
            <input className='bg-white p-2 rounded-3xl placeholder-gray-500 w-100 text-black' type="text" placeholder='search a book' name="" id="" />
         <FaSearch className='text-gray-500' 
         style={{margin:'10px',fontSize:'30px'}}
         />
          </div>


          {/* new arrivals  */}
          <section>
            <h1>Nwe Arrivals</h1>
            <h1>Exploere our latest collection</h1>
            <div>
              <div>
                <img src="" alt="" />
                <div>
                  <p>author</p>
                  <p>booktitle</p>
                  <p>discountprice</p>
                </div>
              </div>

            </div>

            <div className="text-center my-10">
              <Link to={'/all-books'}>explore more..</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home
