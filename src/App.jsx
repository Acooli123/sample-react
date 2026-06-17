import Navbar from './components/Navbar'
import Product_Cart from './components/Product_Cart'
import TailwindCSS from './components/TailwindCSS'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addToCart } from "./features/cart/cartSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<TailwindCSS />} />
        <Route path="/product" element={<Product_Cart name="Product 1" img="https://i.pinimg.com/736x/d6/a6/92/d6a692fc1e0489955e2b4ed4ae742c76.jpg" price={10} onAddToCart={handleAddToCart} />} />
      </Routes>
    </div>
  )
}

export default App
