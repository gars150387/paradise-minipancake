import "../style/checkout.css";

export const Checkout = ({ cart, setCart }) => {
  const handleRemovedItem = (id) => {
    const removedItem = cart.filter((item) => item.id !== id);
    setCart(removedItem);
  };

    

  return (
    <div className="checkout-container">
      <div className="added-item-checkout">
        {cart.map(({ id, title, author, price, img, amount }) => {
          return (
            <div className="card-checkout" key={id}>
              <img src={img} alt="checkout img" />
              <div className="info-container">
                <h1>{title}</h1>
                <p>{author}</p>
              </div>
              <strong>
                <h1>Unit Price: {price}</h1>
              </strong>
              <div className="counter-checkout">
              </div>

              <div className="price-checkout">
                <h1>Price: {(setIncrease, price)=> {
                  console.log( setIncrease )
                  console.log( price )
                }} </h1>
              </div>
              <div className="button-remove-item-checkout">
                <button onClick={() => handleRemovedItem(id)}>Remove</button>
              </div>
            </div>
          );
        })} 
      </div>
      <div className="checkout-final-description-container">
        {cart.length === 0 ? <h1>Cart is empty</h1> : <h1>Checkout</h1>}

        {console.log( cart.length )}
      </div>
    </div>
  );
};
