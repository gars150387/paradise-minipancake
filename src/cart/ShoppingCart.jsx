import { NavbarSocialMedia } from "../components/NavbarSocialMedia";
import { CardItem } from "./CardItem";
import list from "./list";
import { NavShopping } from "./NavShopping";



import '../style/shoppingCart.css'

export const ShoppingCart = () => {
  return (
    <div>
      <div>
        <NavShopping />
      </div>
      <section className="shoppingCart-section">
        {list.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
};
