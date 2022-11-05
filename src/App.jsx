import { Routes, Route } from "react-router-dom";
import "./App.css";
import { NavbarShopCart } from "./component/NavbarShopCart";
import { Navigation } from "./component/Navigation";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Order } from "./pages/Order";

function App() {
  return (
    <div className="App">
      <div>
         <NavbarShopCart />
      </div>
     <div>
      <Navigation />
     </div>

      
        <Routes>
          <Route index path="/" element={ <Home />} />
          <Route path="/menu" element={ <Menu />} />
          <Route path="/order" element={ <Order />} />
        </Routes>
    </div>
  );
}

export default App;
