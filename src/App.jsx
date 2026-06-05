import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Hero } from "./components/Hero/Hero";
import { ImageBanner } from "./components/ImageBanner/ImageBanner";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { SpotifyPlayer } from "./components/SpotifyPlayer/SpotifyPlayer";
import './index.css'
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/admin" element={<ProductFormContainer />} />
          <Route path="/success/:id" element={<ProductSuccess />} />
          <Route path="/" element={
            <>
              <div className="hero-wrapper">
                <Hero />
              </div>
              <ImageBanner />
              <ItemListContainer />
            </>
          } />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
        </Routes>
      </main>
      <Footer />
      {location.pathname !== "/admin" && <SpotifyPlayer />}
    </>
  );
}

export default App;