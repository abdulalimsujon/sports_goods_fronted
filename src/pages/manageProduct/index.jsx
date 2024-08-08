import { useState } from "react";
import LoaderSpinner from "../../components/utilities/LoaderSpinner";
import { useGetProductsQuery } from "../../redux/api/api";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import CreateProductModal from "../../components/utilities/CreateProductModal";

const ManageProduct = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  const handleDelete = (id) => {
    console.log(id);
  };
  const handleUpdate = (id) => {
    console.log(id);
  };

  return (
    <div className="flex justify-center items-center pt-10 max-w-[1650px] mx-auto pb-10">
      <div className="w-full px-4 sm:px-6 lg:px-4 xl:px-10">
        <div className="relative flex justify-end mb-5 mt-5 group">
          <span className="p-1 sm:p-5  rounded-md font-bold  ">
            <button
              className="btn block w-full px-4  bg-amber-500 text-center cursor-pointer"
              onClick={openModal} // Trigger modal on click
            >
              Add
            </button>

            <CreateProductModal isOpen={isModalOpen} closeModal={closeModal} />
          </span>
        </div>

        {/* Table Section */}
        <div className="border-slate-50">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-700 uppercase text-xs sm:text-sm leading-normal text-center">
                  <th className="py-3 px-2 sm:px-6 text-center rounded-sm">
                    Serial No
                  </th>
                  <th className="py-3 px-2 sm:px-6 text-center">Image</th>
                  <th className="py-3 px-2 sm:px-6 text-center">Product</th>
                  <th className="py-3 px-2 sm:px-6 text-center">Category</th>
                  <th className="py-3 px-2 sm:px-6 text-center">Brand</th>
                  <th className="py-3 px-2 sm:px-6 text-center">Rating</th>
                  <th className="py-3 px-2 sm:px-6 text-center">
                    Stock Quantity
                  </th>
                  <th className="py-3 px-2 sm:px-6 text-center">Description</th>
                  <th className="py-3 px-2 sm:px-6 text-center">Action</th>
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
                    <td className="py-3 px-2 sm:px-6 text-center flex justify-center items-center space-x-2">
                      <button
                        onClick={() => handleUpdate(product.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <RiDeleteBin7Line size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr className="bg-gray-200 text-gray-700 uppercase text-xs sm:text-sm leading-normal">
                  <td colSpan="9" className="py-3 px-2 sm:px-6 text-center">
                    {/* Page Numbers (Static from 1 to 10) */}
                    <div className="flex justify-center items-center space-x-2">
                      {[...Array(10).keys()].map((page) => (
                        <button
                          key={page}
                          className="px-3 py-1 sm:px-4 sm:py-1 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
                        >
                          {page + 1}
                        </button>
                      ))}
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
