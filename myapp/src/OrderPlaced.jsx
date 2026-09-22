import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "./OrderSlice";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showPopup = useSelector(
    (state) => state.order.showPopup
  );

  if (!showPopup) {
    return null;
  }

  const handleContinue = () => {
    dispatch(closePopup());
    navigate("/Product");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full">

        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-4xl font-bold">
          ✓
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Order Placed!
        </h2>

        <p className="text-gray-600 mb-6">
          Your order has been placed successfully.
        </p>

        <button
          onClick={handleContinue}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
};

export default OrderPlaced;