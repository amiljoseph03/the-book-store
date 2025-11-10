
// import React from 'react';
// import Header from '../Components/Header';
// import { Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';

// function Home() {
//   return (
//     <>
//       <Header />
//       <div
//         style={{ height: '500px' }}
//         className="flex flex-col justify-center items-center
//       bg-[url()]
//       bg-cover bg-centertext-white"
//       >
//         <div
//           style={{ height: '500px', backgroundColor: 'black' }}
//           className="w-full flex flex-col justify-center items-center"
//         >
//           <h1 className="text-5xl font-bold">wonderful gifts</h1>
//           <p>give your familiy and friends</p>
//           <div className="mt-9 flex">
//             <input
//               className="bg-white p-2 rounded-3xl placeholder-gray-500 w-100 text-black"
//               type="text"
//               placeholder="search a book"
//               name=""
//               id=""
//             />
//             <FaSearch
//               className="text-gray-500"
//               style={{ margin: '10px', fontSize: '30px' }}
//             />
//           </div>

//           {/* new arrivals  */}
//           <section>
//             <h1>Nwe Arrivals</h1>
//             <h1>Exploere our latest collection</h1>
//             <div>
//               <div>
//                 <img
//                   src="https://i.pinimg.com/736x/cb/64/7e/cb647e178bbccfb7498002aa2d070f18.jpg"
//                   alt=""
//                 />
//                 <div>
//                   <p>author</p>
//                   <p>booktitle</p>
//                   <p>discountprice</p>
//                 </div>
//               </div>
//             </div>

//             <div className="text-center my-10">
//               <Link to={'/all-books'}>explore more..</Link>
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home



// File: src/Users/Pages/Home.jsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{ height: '500px' }}
        className="flex flex-col justify-center items-center bg-[url('https://i.pinimg.com/736x/cb/64/7e/cb647e178bbccfb7498002aa2d070f18.jpg')] bg-cover bg-center text-white"
      >
        
        <div className="bg-black bg-opacity-70 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-3">Wonderful Gifts</h1>
          <p className="mb-5 text-lg">
            Give your family and friends the gift of reading
          </p>

          <div className="mt-3 flex">
            <input
              className="bg-white p-2 rounded-3xl placeholder-gray-500 text-black w-64"
              type="text"
              placeholder="Search a book"
            />
            <FaSearch
              className="text-gray-500 cursor-pointer"
              style={{ margin: '10px', fontSize: '25px' }}
            />
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <section className="py-10 text-center">
        <h1 className="text-3xl font-bold mb-2">New Arrivals</h1>
        <p className="text-gray-700 mb-8">Explore our latest collection</p>

        <div className="flex justify-center">
          <div className="shadow-lg p-5 rounded-xl">
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
