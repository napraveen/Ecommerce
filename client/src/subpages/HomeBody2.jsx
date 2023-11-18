import React from 'react';
import '../css/Body.css';
import { Link } from 'react-router-dom';
import electronics from '../images/electronics.jpeg';
import appliances from '../images/appliances.jpeg';
import fashion from '../images/fashion.jpeg';
import furniture from '../images/furniture.jpeg';
import groceries from '../images/groceries.jpeg';
import mobiles from '../images/mobiles.jpeg';
import electronicTv from '../images/electronic-tv.jpeg';
import trimmer from '../images/trimmer.jpeg';
import electronicKeyboard from '../images/electronic-keyboard.png';
import electronicPrinter from '../images/electronic-printer.jpeg';
import electronicHeadset from '../images/electronic-headset.jpeg';
import electronicCamera from '../images/electronic-camera.jpeg';
import data from '../data';
const HomeBody2 = () => {
  return (
    <div className="body-container">
      <div className="body-container-0">
        <h1 className="body-all-items">Order Anything Online</h1>
        <div className="body-first">
          <Link to="#">
            <img src={electronics} className="body-img-list-first" alt="Idly" />
          </Link>
          <Link to="#">
            <img src={furniture} className="body-img-list-first" alt="Dosa" />
          </Link>
          <Link to="#">
            <img src={groceries} className="body-img-list-first" alt="Cakes" />
          </Link>
          <Link to="#">
            <img src={fashion} className="body-img-list-first" alt="Pizza" />
          </Link>
          <Link to="#">
            <img src={mobiles} className="body-img-list-first" alt="Biriyani" />
          </Link>
          <Link to="#">
            <img src={appliances} className="body-img-list-first" alt="Vada" />
          </Link>
        </div>
      </div>
      <h1 className="body-electronics">Best of Electronics</h1>
      <div className="body-container-1">
        {data.products.map((product) => (
          <div className="body-food1">
            <Link to={`/products/product/${product.slug}`}>
              <img
                src={product.image}
                width="100%"
                height="60%"
                className="body-list-img"
                alt={product.name}
              />
            </Link>
            <h3 className="body-title">{product.name}</h3>
            <p className="body-para">{product.brand}</p>
            <div className="body-offer">{product.offer}% Off up to 100</div>
            <div className="body-rating">{product.rating}&#x2605;</div>
          </div>
        ))}
      </div>
      <div className="body-container-2">
        <div className="body-food1">
          <Link to="order-online.html">
            <img
              src={electronicPrinter}
              width="100%"
              height="60%"
              className="body-list-img"
              alt="New Pizza"
            />
          </Link>
          <h3 className="body-title">New Pizza</h3>
          <p className="body-para">Pizza</p>
          <div className="body-offer">55% Off up to 100</div>
          <div className="body-rating">4.6&#x2605;</div>
        </div>
        <div className="body-food2">
          <Link to="order-online.html">
            <img
              src={electronicHeadset}
              width="100%"
              height="60%"
              className="body-list-img"
              alt="Dhaba"
            />
          </Link>
          <h3 className="body-title">Dhaba</h3>
          <p className="body-para">North Indian Style</p>
          <div className="body-offer">55% Off up to 100</div>
          <div className="body-rating">4.5&#x2605;</div>
        </div>
        <div className="body-food3">
          <Link to="order-online.html">
            <img
              src={electronicCamera}
              width="100%"
              height="60%"
              className="body-list-img"
              alt="La Pino's Pizza"
            />
          </Link>
          <h3 className="body-title">La Pino's Pizza</h3>
          <p className="body-para">Pizzas, Burger</p>
          <div className="body-offer">50% Off up to 100</div>
          <div className="body-rating">4.5&#x2605;</div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody2;
