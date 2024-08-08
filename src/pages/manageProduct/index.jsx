import LoaderSpinner from "../../components/utilities/LoaderSpinner";
import { useGetProductsQuery } from "../../redux/api/api";

const ManageProduct = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <div className="flex justify-center items-center pt-8 max-w-[1600px] bg-slate-50 mx-auto pb-10">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative flex justify-end mb-16 mt-5 group">
          <span className=" p-3 sm:p-5 border rounded-md font-bold text-white bg-amber-300">
            Manage Product
          </span>
          <div className="absolute right-0 pt-0 mt-0 hidden bg-white border rounded shadow-md group-hover:block z-[100]">
            <ul className="py-2 h-36 w-40 sm:w-48">
              <li className="px-4 py-2 hover:bg-amber-500 text-center">Add</li>
              <li className="px-4 py-2 hover:bg-amber-500 text-center">
                Update
              </li>
              <li className="px-4 py-2 hover:bg-amber-500 text-center">
                Delete
              </li>
            </ul>
          </div>
        </div>

        <div className="border-slate-50">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-700 uppercase text-xs sm:text-sm leading-normal text-center">
                  <th className="py-3 px-2 sm:px-6  text-center">Serial No</th>
                  <th className="py-3 px-2 sm:px-6 text-center">Image</th>
                  <th className="py-3 px-2 sm:px-6 text-center">Product</th>
                  <th className="py-3 px-2 sm:px-6 text-center">Category</th>
                  <th className="py-3 px-2 sm:px-6 text-center">Brand</th>
                  <th className="py-3 px-2 sm:px-6 text-center">Rating</th>
                  <th className="py-3 px-2 sm:px-6 text-center">
                    Stock Quantity
                  </th>
                  <th className="py-3 px-2 sm:px-6 text-center">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-xs sm:text-sm font-light">
                {products.data.map((product, index) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-2 sm:px-6 text-center whitespace-nowrap">
                      <span className="font-medium">{index + 1}</span>
                    </td>
                    <td className="py-3 px-2 sm:px-6 text-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                      />
                    </td>
                    <td className="py-3 px-2 sm:px-6 text-center">
                      {product.name}
                    </td>
                    <td className="py-3 px-2 sm:px-6 text-center">
                      {product.category}
                    </td>
                    <td className="py-3 px-2 sm:px-6 text-center">
                      {product.brand}
                    </td>
                    <td className="py-3 px-2 sm:px-6 text-center">
                      {product.rating}
                    </td>
                    <td className="py-3 px-2 sm:px-6 text-center">
                      {product.stock_quantity}
                    </td>
                    <td className="py-3 px-2 sm:px-6 text-center">
                      {product.description}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-200 text-gray-700 uppercase text-xs sm:text-sm leading-normal">
                  <td colSpan="8" className="py-3 px-2 sm:px-6 text-center">
                    <div className="flex justify-center items-center space-x-2">
                      <button className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                        Previous
                      </button>
                      <span>Page 1 of 5</span>
                      <button className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                        Next
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
