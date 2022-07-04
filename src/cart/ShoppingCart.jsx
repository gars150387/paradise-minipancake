import { CardItem } from "./CardItem";
import list from "./list";
import { NavShopping } from "./NavShopping";

import '../style/shoppingCart.css'
import { useState } from "react";
import { Checkout } from "./Checkout";


export const ShoppingCart = () => {

  const [show, setShow] = useState(true)

  const [cart, setCart] = useState([])

  const handleAddItemInCart = ( item ) =>{
    setCart([...cart, item])
  }



  return (
    <div>
      <div>
        <NavShopping setShow={ setShow } cart={ cart } show={ show } />
      </div>

      { show ? (
          <section className="shoppingCart-section">
          {list.map((item) => {
            return <CardItem handleAddItemInCart={ handleAddItemInCart } key={item.id} item={item} />;
          })}
        </section>
        
      ) :  ( 
      <section>
        <Checkout cart={ cart } setCart={ setCart }/>
      </section> )}
    
    </div>
  );
};
