import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";

function Cart() {
  const { cart, removeItemFromCartList } = useContext(GlobalContext);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {!cart.length ? (
        <p>No Item Added! Please add something to your cart</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-price">₹{item.price}</div>
                <div className="item-name">{item.name}</div>
                <div className="item-expectedDelivery">
                  (Expected Delivery 3 - 6 days)
                </div>
                <button
                  className="item-remove-btn"
                  onClick={() => removeItemFromCartList(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-subtotal">
            Subtotal: ₹{cart.reduce((total, item) => total + item.price, 0)}
          </div>
          <Link to="/checkout">
            <button className="item-btn">Next</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
