import React from "react";

const initialState = {
  cart: [],
  orders: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_IN_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case "REMOVE_ITEM_IN_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_ITEM_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_IN_ORDER":
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      };
    case "REMOVE_ITEM_IN_ORDER":
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order.orderId !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_IN_CART":
    case "REMOVE_ITEM_IN_CART":
    case "UPDATE_ITEM_QUANTITY":
    case "CLEAR_CART":
      return cartReducer(state, action);
    case "ADD_ITEM_IN_ORDER":
    case "REMOVE_ITEM_IN_ORDER":
      return orderReducer(state, action);
    default:
      return state;
  }
};

export default rootReducer;
