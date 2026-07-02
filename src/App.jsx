import Navbar from "./components/Navbar";
import Product_Cart from "./components/Product_Cart";
import TailwindCSS from "./components/TailwindCSS";
import { Route, Routes } from "react-router-dom";
import StudentForm from "./components/StudentForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <StudentForm />

      <Routes>
        <Route path="/" element={<TailwindCSS />} />
        </Routes>
        <Product_Cart
              name="Product 1"
              img="https://i.pinimg.com/736x/d6/a6/92/d6a692fc1e0489955e2b4ed4ae742c76.jpg"
              price={10}
            />

    </div>
  );
};

export default App;