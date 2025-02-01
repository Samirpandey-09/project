import React from "react";
import items from "../../mockData/items.json";
import ItemList from "../itemList/ItemList";

function HomePage() {
  return (
    <>
      <header>
        <h1>Welcome to Our Store</h1>
      </header>
      <main>
        <section>
          <ItemList items={items} />
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Our Store. All rights reserved.</p>
      </footer>
    </>
  );
}

export default HomePage;
