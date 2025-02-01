import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import items from "../../mockData/items.json";
import { GlobalContext } from "../../context/GlobalState";

const getItemDetail = (id) => items.find((item) => item.id === id);

function ItemDetail() {
  const { id } = useParams();
  const itemId = parseInt(id, 10);
  const item = !!itemId && getItemDetail(itemId);
  const { addItemToCartList, cart } = useContext(GlobalContext);
  const [isAdded, setIsAdded] = useState(cart.some((c) => c.id === itemId));
  const [selectedSize, setSelectedSize] = useState("");

  if (!item) {
    return (
      <div className="item-detail-container">
        <p>Item not found. <Link to="/">Go back to home</Link></p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItemToCartList({ ...item, size: selectedSize });
    setIsAdded(true);
  };

  return (
    <div className="item-detail-container">
      <Link to="/"> &#8592; Back</Link>
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={item.image} alt={item.name || "Item image"} />
        </div>
        <div className="item-detail-info">
          <div className="item-brand" style={{ margin: "0px 10px" }}>
            {item.brand}
          </div>
          <div className="item-name">{item.name}</div>
          <div className="item-price">₹{item.price}</div>

          <select
            className="item-size"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">Select size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          
          <button
            className="item-btn"
            disabled={isAdded || !selectedSize}
            onClick={handleAddToCart}
          >
            {isAdded ? <Link to="/cart">Go to Cart</Link> : "Add To Bag"}
          </button>

          <p className="item-description">
            {item.description || "No description available for this item."}
          </p>

          <div className="item-reviews">
            <h3>Customer Reviews</h3>
            {item.reviews && item.reviews.length > 0 ? (
              item.reviews.map((review) => (
                <div key={review.id} className="review">
                  <p><strong>{review.author}</strong> - {review.rating} ★</p>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet. Be the first to review!</p>
            )}
          </div>

          <div className="related-items">
            <h3>Related Items</h3>
            {/* Implement logic to display related items */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
