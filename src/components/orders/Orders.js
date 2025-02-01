import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

function Orders() {
  const { orders, removeOrder } = useContext(GlobalContext);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateOrderTotal = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found. Start shopping now!</p>
      ) : (
        orders.map((order) => (
          <div className="checkout-container" key={order.orderId}>
            <h3>Order ID: #{order.orderId}</h3>
            <p className="order-date">Placed on: {formatDate(order.orderDate)}</p>
            <p className="order-status">Status: {order.status}</p>
            <p className="order-total">Total: ₹{calculateOrderTotal(order.items)}</p>
            
            <div className="order-items">
              {order.items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">₹{item.price}</div>
                  <div className="item-expectedDelivery">Expected delivery: 3-6 days</div>
                </div>
              ))}
            </div>

            <button 
              className="cancel-order-btn"
              onClick={() => removeOrder(order.orderId)}
            >
              Cancel Order
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
