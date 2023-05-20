import React from 'react';
import Product03 from '../images/product03.jpg'
import Product02 from '../images/product02.jpg'
import Product01 from '../images/product01.jpg'
import Product04 from '../images/product04.jpg'


const Product = () => {
  return (

    <section className="product">
      <div className="section-heading">
        <h1 className="red">Products</h1>
        <a href className="red">View All</a>
      </div>
      <div className="product-main">
        <div className="product-item">
          <img src={Product01} width="100%" height="220px" />
          <div className="product-inner">
            <div className="flex-box">
              <h3 className="red">Cold Drink</h3>
              <b>₹50</b>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem maiores dicta porro, reprehenderit assumenda numquam, quam necessitatibus odit, modi tempore rem laudantium a quae.</p>
            <div className="flex-box">
              <ul>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
              </ul>
              <button>Read more</button>
            </div>
          </div>
        </div>
        <div className="product-item">
          <img src={Product02} width="100%" height="220px" />
          <div className="product-inner">
            <div className="flex-box">
              <h3 className="red">Pie</h3>
              <b>₹50</b>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem maiores dicta porro, reprehenderit assumenda numquam, quam necessitatibus odit, modi tempore rem laudantium a quae.</p>
            <div className="flex-box">
              <ul>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
              </ul>
              <button>Read more</button>
            </div>
          </div>
        </div>
        <div className="product-item">
          <img src={Product03} width="100%" height="220px" />
          <div className="product-inner">
            <div className="flex-box">
              <h3 className="red">Cake</h3>
              <b>₹50</b>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem maiores dicta porro, reprehenderit assumenda numquam, quam necessitatibus odit, modi tempore rem laudantium a quae.</p>
            <div className="flex-box">
              <ul>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
              </ul>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-main">
        <div className="product-item">
          <img src={Product04} width="100%" height="220px" />
          <div className="product-inner">
            <div className="flex-box">
              <h3 className="red">Coffee</h3>
              <b>₹50</b>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem maiores dicta porro, reprehenderit assumenda numquam, quam necessitatibus odit, modi tempore rem laudantium a quae.</p>
            <div className="flex-box">
              <ul>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
              </ul>
              <button>Read more</button>
            </div>
          </div>
        </div>
        <div className="product-item">
          <img src={Product03} width="100%" height="220px" />
          <div className="product-inner">
            <div className="flex-box">
              <h3 className="red">Cake</h3>
              <b>₹50</b>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem maiores dicta porro, reprehenderit assumenda numquam, quam necessitatibus odit, modi tempore rem laudantium a quae.</p>
            <div className="flex-box">
              <ul>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
              </ul>
              <button>Read more</button>
            </div>
          </div>
        </div>
        <div className="product-item">
          <img src={Product01} width="100%" height="220px" />
          <div className="product-inner">
            <div className="flex-box">
              <h3 className="red">Cold Drink</h3>
              <b>₹50</b>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem maiores dicta porro, reprehenderit assumenda numquam, quam necessitatibus odit, modi tempore rem laudantium a quae.</p>
            <div className="flex-box">
              <ul>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
                <li><i className="fa-solid fa-star red" /></li>
              </ul>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product