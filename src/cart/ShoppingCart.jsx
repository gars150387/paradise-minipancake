import { CardItem } from "./CardItem";
import list from "./list";
import { NavShopping } from "./NavShopping";

import '../style/shoppingCart.css'
import { useState } from "react";

export const ShoppingCart = () => {

  const [cart, setCart] = useState([])

  const handleAddItemInCart = ( item ) =>{
    console.log( 'cart',cart, 'item', item )

  }


  return (
    <div>
      <div>
        <NavShopping />
      </div>
      <section className="shoppingCart-section">
        {list.map((item) => {
          return <CardItem handleAddItemInCart={ handleAddItemInCart } key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
};
