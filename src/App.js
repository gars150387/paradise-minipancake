import { Routes, Route } from "react-router-dom";
import { Checkout } from "./cart/Checkout";
import { ShoppingCart } from "./cart/ShoppingCart";
import { Navbar } from "./components/Navbar";
import { AppMain } from "./router/AppMain";

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<AppMain />}></Route>
        <Route exact path="/shoppingCart" element={<ShoppingCart />}></Route>
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
