import React from "react";
import "./Product.css";
import PropTypes from "prop-types";

const Product = ({ image, title, price, viewCount }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
    </div>
  )
}
Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  viewCount: PropTypes.number
}

export default Product;