import React from 'react';
import Navigation from './navbar';
const Home = () => (
  <>
  <header>
    <Navigation />
  </header>
  <main>
    <h2 className="welcome">Welcome to our page</h2>
    <div className="main-box">
      <p className="sub-box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laborum maxime a ex quaerat nesciunt nostrum labore blanditiis voluptatum,
        repellendus sed, odio sit eveniet natus harum nisi
        voluptatem amet. Consequatur, consectetur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laborum maxime a ex quaerat nesciunt
        nostrum labore blanditiis voluptatum, repellendus sed, odio sit eveniet
        natus harum nisi voluptatem amet. Consequatur, consectetur.
      </p>
      <p className="lores">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laborum maxime a ex quaerat nesciunt nostrum
        labore blanditiis voluptatum, repellendus sed,
        odio sit eveniet natus harum nisi voluptatem amet.
        Consequatur, consectetur.Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Laborum maxime a ex quaerat nesciunt nostrum
        labore blanditiis voluptatum, repellendus sed,
        odio sit eveniet natus harum nisi voluptatem amet.
        Consequatur, consectetur.
      </p>
    </div>
  </main>
  </>
);

export default Home;
