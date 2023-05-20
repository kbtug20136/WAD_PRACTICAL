import React from 'react'

const About = () => {
  return (

    <section className="about">
      <div className="section-heading">
        <h1 className="red">About Detail</h1>
      </div>
      <div className="about-main">
        <div className="about-text">
          <h2>Looking for new products</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore amet vitae sapiente suscipit debitis a, consectetur dolores veritatis maiores, porro iusto rem minus eaque distinctio libero reiciendis omnis esse, odit.</p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>adipisicing elit. Tempora maiores </li>
            <li>laboriosam alias corrupti quia </li>
            <li>voluptatum necessitatibus </li>
            <li>dolorem distinctio inventore voluptatem!</li>
          </ul>
          <button className="about-btn">Read More</button>
        </div>
        <div className="about-img">
          <img src="images/about.jpg" width="100%" />
        </div>
      </div>
    </section>
  );
}

export default About