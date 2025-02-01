import React from "react";
import "./Item.css";

function Item({ name, rating, price, saleDiscount, image, brand }) {
  return (
    <div className="item-card">
      <figure>
        <img src={image} alt={name || "Item image"} width="100%" />
        <figcaption>{name}</figcaption>
      </figure>
      <div className="item-brand">{brand}</div>
      <div className="item-info">
        <div className="item-price">
          ₹{price} 
          {saleDiscount && <span className="item-sale"> - {saleDiscount}% Off</span>}
        </div>
        <div className="item-rating">{rating}&#9733;</div>
      </div>
    </div>
  );
}

export default Item;
