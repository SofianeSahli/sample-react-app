import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Component/HomeComponent';
import CategorySearch from './Component/CategorySearch';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>  </Route>
        <Route path='/search/:category' element={<CategorySearch/>}>  </Route>
      </Routes>
    </div>
  );
}

export default App;
