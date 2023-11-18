import React from 'react';
import '../css/productpage.css';
import HomeHeader from '../subpages/HomeHeader';
import sonyWirelessHeadphones from '../images/sonywirelessheadphones.jpeg';
import data from '../data';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/products/product/${slug}`
        ); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [slug]);
  return (
    <div>
      {product ? (
        <div className="product-container">
          <HomeHeader />
          <div className="product-body">
            <div className="product-left">
              <img
                src={require(`../images/${product.image}`)}
                alt="Headphone"
                className="product-image"
              />
              <input
                type="button"
                placeholder="Share"
                className="product-share"
                value="Share"
              />
            </div>
            <div className="product-right">
              <div className="product-description"></div>
              <h1>{product.name}</h1>
              <h3>{product.brand}</h3>
              <h3>{product.rating} stars</h3>
              <h3>Price: ${product.price}</h3>
              <div className="product-buy">
                <input
                  type="button"
                  className="product-add-to-cart"
                  value="Add to Cart"
                />
                <input
                  type="button"
                  className="product-buy-now"
                  value="Buy Now"
                />
              </div>

              <span className="product-label">Brand Name:</span>
              <span className="product-value">{product.name}</span>
              <br />
              <span className="product-label">Model Name:</span>
              <span className="product-value">{product.name}</span>
              <br />
              <span className="product-label">Color:</span>
              <span className="product-value">{product.color}</span>
              <br />
              <span className="product-label">Description:</span>
              <span className="product-value">{product.description}</span>
              <br />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
