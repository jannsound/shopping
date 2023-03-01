import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Basket from "./pages/Basket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/Basket" element={<Basket />} />
      <Route />
    </Routes>
  );
}

export default App;
