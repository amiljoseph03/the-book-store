import React from 'react'
import { CiSettings } from 'react-icons/ci'

function Adminsidebar() {
  return (
    <div>
      <div>
        <div className="bg-blue">
          <div className="flex">
            <img src="" alt="" />
          </div>

          <h1>admin name</h1>
          <div className="md:text">
            <div className="mt-3">
              <Link to={'/admin-dashboard'}><CiHome/>Home</Link>
            </div>
            <div className="mt-3">
              <Link to={'/admin-resources'}><BsCollection/> Collections</Link>
            </div>
            <div className="mt-3">
              <Link to={'/admin-settings'}><CiSettings/>Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminsidebar
