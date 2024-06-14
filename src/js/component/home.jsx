import React from "react";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h1>Start Bootstrap</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <section className="hero">
          <h2>A Warm Welcome!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
          <button>Call to action!</button>
        </section>
        <section className="cards">
          <div className="card">
            <img src="https://via.placeholder.com/500x325" alt="Placeholder" />
            <h3>Card title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/500x325" alt="Placeholder" />
            <h3>Card title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/500x325" alt="Placeholder" />
            <h3>Card title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Home;
