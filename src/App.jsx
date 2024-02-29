import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Cart } from "./components/Cart.jsx";

import { CartProvider } from "./context/cart.jsx";

function App() {
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products />
      <Footer />
    </CartProvider>
  );
}

export default App;
