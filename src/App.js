import { Routes, Route } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ShoppingCart } from "./cart/ShoppingCart";
import { Navbar } from "./components/Navbar";
import { AppMain } from "./router/AppMain";

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <Routes>
        <Route path="/" element={<AppMain />}></Route>
        <Route exact path="login" element={<Login />}></Route>
        <Route exact path="register" element={<Register />}></Route>
        <Route exact path="shoppingCart" element={<ShoppingCart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
