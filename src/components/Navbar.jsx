import "./Navbar.css";
import { useSelector } from "react-redux";
 



const Navbar = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/student">Student</a></li>
        <li><a href="/admin">Admin</a></li>
      </ul>

      <button className="btn">Login</button>
      <h2>Cart: {items.length}</h2>
    </nav>
  );
}

export default Navbar;