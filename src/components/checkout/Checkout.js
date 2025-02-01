import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Checkout.css";

const Checkout = () => {
  const { cart, orders, addItemToOrderList, clearCart } = useContext(GlobalContext);
  const { discount, extraFees, tax } = { discount: 20, extraFees: 99, tax: 5 };
  const subTotal = cart.reduce((sum, curr) => sum + curr.price, 0);
  const discountAmount = (subTotal + extraFees + tax) * (discount / 100);
  const total = Math.floor(subTotal + extraFees + tax - discountAmount);
  const [isOrdered, setIsOrdered] = useState(false);

  const handlePay = () => {
    try {
      addItemToOrderList({
        orderId: orders.length + 1,
        buyerId: 1,  // Dynamic ID if available
        items: [...cart],
        price: total,
        address: "7 Rusk Court",  // Fetch dynamically
        deliveryDate: new Date().toLocaleDateString("en-GB"), // Current date
        isDelivered: false,
      });
      clearCart();
      setIsOrdered(true);
    } catch (error) {
      console.error("Error placing order: ", error);
      alert("There was an issue placing your order. Please try again.");
    }
  };

  return (
    <div className="checkout-container">
      {isOrdered ? (
        <h3>
          Yay! 🚀 Order placed successfully. <Link to="/">Shop more!</Link>
        </h3>
      ) : (
        <>
          <div>
            <div className="custom-row">
              <h4>Order Review</h4>
              <span>{cart?.length} items in cart</span>
            </div>
            <div className="custom-row">
              <h4>Coupons</h4>
              <span>Not Available</span>
            </div>
            <div className="custom-row">
              <h4>Checkout Summary</h4>
              <div className="checkout-summary">
                <span>Subtotal</span>
                <span>₹{subTotal}</span>
              </div>
              <div className="checkout-summary">
                <span>Discount</span>
                <span>{discount}%</span>
              </div>
              <div className="checkout-summary">
                <span>Extra Fee</span>
                <span>₹{extraFees}</span>
              </div>
              <div className="checkout-summary">
                <span>Tax</span>
                <span>₹{tax}</span>
              </div>
            </div>
            <div className="custom-row">
              <h4>Total</h4>
              <span>₹{total}</span>
            </div>
          </div>
          <button className="item-btn" onClick={handlePay}>
            Pay ₹{total}
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
