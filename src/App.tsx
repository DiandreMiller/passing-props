//Dependencies

import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Page/Page1';
import Page2 from './Page/Page2';
import Navbar from './Components/Navbar';
import Page3 from './Page/Page3';


function App() {
  const [count, setCount] = useState(0);

  const handleIncrementCount = (num) => {
    const updatedCount = count + num;
    setCount(updatedCount);
  }

  const handleDecrementCount = (num) => {
    const updatedCount = count - num;
    setCount(updatedCount);
  }


  return (
   <BrowserRouter>
      <Navbar count={count} />
      <Routes>
        <Route element={<Page1 count={count} increase={handleIncrementCount} decrease={handleDecrementCount} />} path='/page1'/>
        <Route element={<Page2 count={count} increase={handleIncrementCount} decrease={handleDecrementCount} />} path='/page2'/>
        <Route element={<Page3 count={count} increase={handleIncrementCount} decrease={handleDecrementCount} />} path='/page3'/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
