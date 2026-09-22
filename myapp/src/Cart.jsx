import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  clearCart,
} from "./cartSlice";


import { placeOrder } from "./OrderSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const handleOrder = () => {
    dispatch(placeOrder());
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] bg-gray-100 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-600">
          Cart is empty
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Your Cart
        </h2>

        <div className="space-y-4">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 flex items-center gap-5"
            >

              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-blue-600 font-semibold mt-1">
                  ₹{item.price}
                </p>
              </div>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Remove
              </button>

            </div>
          ))}

        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mt-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Total: ₹{total.toFixed(2)}
          </h2>

          <button
            onClick={handleOrder}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
};

export default Cart;