import React from "react";
import Item from "../item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <article key={item.id}>
          <Link to={`/item/${item.id}`}>
            <Item
              name={item.name}
              rating={item.rating}
              price={item.price}
              saleDiscount={item.saleDiscount}
              image={item.image}
              brand={item.brand}
            />
          </Link>
        </article>
      ))}
    </div>
  );
}

export default ItemList;
