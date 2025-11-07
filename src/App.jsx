import { useState } from 'react'
import Home from './Users/Pages/Allbook'
import Auth from './Pages/Auth'
import Allbook from './Users/Pages/Allbook'
import Career from './Users/Pages/Career'
import Contact from './Users/Pages/Contact'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Book Store</h1>

    <Routes>
      <Route path='' element={ <Home/>}/>
      <Route path='/login' element={ <Auth/>}/>
      <Route path='/register' element={ <Auth/>}/>
      <Route path='/all-books' element={ <Allbook/>}/>
      <Route path='/career' element={ <Career/>}/>
      <Route path='/contact' element={ <Contact/>}/>
    </Routes>
      
    </>
  )
}

export default App
