import React from 'react';
import Navigation from './navbar';
import '../Cssmodules/quote.css';

const Quotes = () => (
  <>
    <div>
      <Navigation />
    </div>
    <div className="text-container">
      <p>
        Mathematics is not about numbers, equations, computations or algorithms;
        it is about understanding - William Paul Thurston.
      </p>
    </div>
  </>
);
export default Quotes;
