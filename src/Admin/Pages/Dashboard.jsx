import React from 'react'
import Adminheader from '../../Components/Adminheader'
// import Adminsidebar from '../Components/Adminsidebar'
import { Link } from 'react-router-dom'
import Adminsidebar from '../../Admin/Components/Adminsidebar';

function Dashboard() {
  return (
    <div>
      <Adminheader/>
      <div className="md:grid">
        <div className="col-span-1">
          <Adminsidebar/>
        </div>

        <div className="col-span-4">
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard
