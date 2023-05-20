import React from 'react'

const Home = () => {
  return (
    <div>
      <header>
        <nav className="navbar py-2">
          <a href>
            <h1>
              <span className="white">COFFEE</span>
              <span className="red">&amp;</span>
              <span className="white">CAKE</span>
            </h1>
          </a>
          
        </nav>
      </header>
      <section className="banner">
        <div>
          <h1 className="red">Best Ever </h1>
          <h1 className="white">Food Review </h1>
        </div>
      </section>
    </div>
  );
}

export default Home