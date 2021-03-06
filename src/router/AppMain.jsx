import { Advertisment } from '../components/Advertisment';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Header } from '../components/Header';
import { Ingredients } from '../components/Ingredients';
import { NavbarSocialMedia } from '../components/NavbarSocialMedia';


export const AppMain = () => {
  return (
    <div className="">
      <section>
        <NavbarSocialMedia />
      </section>
      <section>
        <Header />
      </section>
      <section>
        <Ingredients />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <Advertisment />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

