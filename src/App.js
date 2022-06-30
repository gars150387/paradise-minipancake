import { Advertisment } from './components/Advertisment';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Ingredients } from './components/Ingredients';
import { Navbar } from './components/Navbar';
import { NavbarSocialMedia } from './components/NavbarSocialMedia';


function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
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

export default App;
