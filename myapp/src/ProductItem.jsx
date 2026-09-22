import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  removeFromCart,
} from "./cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const isInCart = cartItems.some(
    (item) => item.id === product.id
  );

  const handleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
          {product.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <p className="text-xl font-bold text-blue-600 mb-2">
          ₹{product.price}
        </p>

        <p className="text-gray-700 mb-4">
          Rating: ⭐ {product.rating}
        </p>

        <button
          onClick={handleCart}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            isInCart
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isInCart
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>

      </div>
    </div>
  );
};

export default ProductItem;