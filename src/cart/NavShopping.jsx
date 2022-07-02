




import '../style/navShoppingCart.css'


export const NavShopping = () => {
  return (
    <>
        <nav className="nav-shoppingCart">
            <div className='shoppingCart-title'>
                <strong><h1>Shopping Cart</h1></strong>
            </div>
            <div className="container-info">
                <div>
                <i className="bi bi-cart4"></i>
                </div>
                <div>
                    <strong>User</strong></div>
            </div>
        </nav>
    </>
  )
}
