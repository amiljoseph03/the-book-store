import React, { useState } from 'react'

function Profile() {
    // const[sellBookStatus,setsellBookStatus]=useState(true)
    // const[bookStatus,setbookStatus]=useState(false)
    // const [purchaseBookStatus, setpurchaseBookStatus] = useState(false)
  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className="bg-black"></div>
      <div className="bg-white p-3">
        <img src="" alt="" />
      </div>

      <div className="md:flex">
        <div className="flex">
          <h1>username</h1>
          <FaCircleCheck />
        </div>
        <Edit />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        aut cum fugit architecto deleniti, iusto at assumenda unde repellat eum
        doloremque sint accusamus harum aspernatur porro totam voluptatibus non
        alias.
      </p>

      <div>
        <div className="md:px-40">
          <div className="flex justify-center">
            <p>Sell books</p>
            <p>bookk status</p>
            <p>purchased book history</p>
          </div>
        </div>
      </div>
      {/* sellbook  */}

      <div>
        <div className="p-10">
          <div className="text">
            <div className="md:grid">
              <div className="px-3">
                <div className="mb-3">
                  <input type="text" name="" id="" placeholder="title" />
                </div>
                <div className="mb-3">
                  <input type="text" name="" id="" placeholder="author" />
                </div>
                <div className="mb-3">
                  <input type="text" name="" id="" placeholder="no.of" />
                </div>
                <div className="mb-3">
                  <input type="text" name="" id="" placeholder="img url" />
                </div>
                <div className="mb-3">
                  <input type="text" name="" id="" placeholder="price" />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="discount price"
                  />
                </div>
                <div className="mb-3">
                  <textarea placeholder="abstract" name="" id=""></textarea>
                </div>
              </div>
              <div className="px-3"></div>
            </div>
            {/* footer  */}
            <div className="p-3">
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile
