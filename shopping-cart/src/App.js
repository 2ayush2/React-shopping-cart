import {
  BrowserRouser as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { ShopContextProvider } from "./pages/Shop/ShopContext";
import { Cart } from "./pages/Cart/Cart";
import { Shop } from "./pages/Shop/Shop";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
