import { useState ,useEffect} from 'react'

import Home from './Users/Pages/Home' 

import Auth from './Pages/Auth'
import Allbook from './Users/Pages/Allbook'
import Career from './Users/Pages/Career'
import Contact from './Users/Pages/Contact'
import Viewbook from './Users/Pages/Viewbook'
import Profile from './Users/Pages/Profile'
import Dashboard from './Admin/Pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Users/Components/Header';

import './App.css'
import Preloader from './Components/Preloader'

function App() {

  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)

    },5000)
  },[])
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header /> */}
      {/* <h1>Book Store</h1> */}

      <Routes>
        <Route path="/" element={loading?<Preloader/>:<Home />} />

        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register />} />

        <Route path="/all-books" element={<Allbook />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/" element={<Home />} />  */}
        <Route path="/home" element={<Home />} />{' '}
        <Route path="/" element={<Home />} />
        {/* USER*/}
        <Route path="/all-books/:id/view" element={<Viewbook />} />{' '}
        <Route path="/profile" element={<Profile />} />
        {/* admin  */}
        <Route path="/admin" element={<Dashboard />} />


      
      </Routes>
    </>
  );
}

export default App
