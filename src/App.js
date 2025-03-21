import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import Signin from './component/Signin';






function App() {
  return (
    <>
    
        <Routes>

          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/' element={<Signin/>}></Route>
        
     
       
        </Routes>
   



    </>

  );
}

export default App