import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './pages/home';
import Quotes from './pages/quote';


function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element = { <Home /> } />
        <Route path = 'calculator' element={<Calculator />} />
        <Route path = 'quotes' element={<Quotes />} />
        
      </Routes>
    </div>
  );
}

export default App;
