import ProductItem from "./ProductItem";

const ProductList = ({ data, view }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <h2 className="text-2xl font-semibold text-gray-600">
          No products found
        </h2>
      </div>
    );
  }

  return (
    <>
      {view === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">

          <table className="w-full text-left">

            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Rating</th>
              </tr>
            </thead>

            <tbody>
              {data.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium">
                    {product.title}
                  </td>

                  <td className="p-4">
                    {product.category}
                  </td>

                  <td className="p-4 font-semibold text-blue-600">
                    ₹{product.price}
                  </td>

                  <td className="p-4">
                    {product.stock}
                  </td>

                  <td className="p-4">
                    ⭐ {product.rating}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </>
  );
};

export default ProductList;