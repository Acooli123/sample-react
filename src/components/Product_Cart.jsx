import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Product_Cart = ({ name, img, price }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addToCart({
        name,
        price,
      })
    );
  };

  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <h2>{name}</h2>

      <img
        src={img}
        alt={name}
        style={{ width: "250px", height: "250px" }}
      />

      <p>Price: ${price}</p>

      <button
        onClick={handleAdd}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product_Cart;