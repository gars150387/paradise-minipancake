import "../style/navShoppingCart.css";



export const NavShopping = ({ show, setShow, cart }) => {

  return (
    <>
      <nav className="nav-shoppingCart">
        <div className="shoppingCart-title">
          <strong>
            <h1 onClick={() => setShow(true)}>{
              show ? 'Shopping Cart' : "Checkout"
            }</h1>
          </strong>
        </div>
        <div className="container-info">
          <div className="icon-cart-container" onClick={() => setShow(false)}>
            <i className="bi bi-cart4"></i>
            <strong>{cart.length}</strong>
          </div>
          <div>
            <strong>User</strong>
          </div>
        </div>
      </nav>
    </>
  );
};
