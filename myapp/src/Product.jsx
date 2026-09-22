import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "./ProductSlice";
import ProductList from "./ProductList";

const Product = () => {
  const dispatch = useDispatch();

  const {
    products,
    loading,
    error,
  } = useSelector((state) => state.products);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [view, setView] = useState("card");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let filterdata = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (sort === "low") {
    filterdata = [...filterdata].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filterdata = [...filterdata].sort(
      (a, b) => b.price - a.price
    );
  }

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-700">
          Loading...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
        <h2 className="text-xl font-semibold text-red-500">
          {error}
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-xl shadow-md p-5 mb-8">

          <div className="flex flex-wrap gap-4 items-center">

            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 min-w-[220px] border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">
                Sort By Price
              </option>

              <option value="low">
                Low to High
              </option>

              <option value="high">
                High to Low
              </option>
            </select>

            <button
              onClick={() => setView("card")}
              className={`px-5 py-3 rounded-lg font-semibold transition ${
                view === "card"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Card
            </button>

            <button
              onClick={() => setView("table")}
              className={`px-5 py-3 rounded-lg font-semibold transition ${
                view === "table"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Table
            </button>

          </div>
        </div>

        <ProductList
          data={filterdata}
          view={view}
        />

      </div>
    </div>
  );
};

export default Product;