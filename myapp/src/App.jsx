import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Header";
import Login from "./Login";
import Product from "./Product";
import Cart from "./Cart";
import ProtectedRoute from "./ProtectedRoute";
import OrderPlaced from "./OrderPlaced";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/Login" replace />}
        />

        <Route
          path="/Login"
          element={<Login />}
        />

        <Route
          path="/Product"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/Login" replace />}
        />
      </Routes>

      <OrderPlaced />
    </BrowserRouter>
  );
};

export default App;