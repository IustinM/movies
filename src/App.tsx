import React from 'react';
// react query
import { useQuery } from 'react-query';
// react router
import {  Route, Routes } from 'react-router-dom'

// import components
import MoviesPage from './pages/movies-page';
import ApiPage from './pages/api-page';
import Contact from './pages/contact';

function App() {

  
  return (
    
    <div className='app'>
      <Routes>
      <Route path='/' element={<MoviesPage/>}/>
      <Route path='/api' element={<ApiPage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
