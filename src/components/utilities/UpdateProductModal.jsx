import PropTypes from "prop-types";
import {
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../../redux/api/api";
import LoaderSpinner from "./LoaderSpinner";
import Toast from "./Toast";

const UpdateProductModal = ({ isOpen, closeModal, product }) => {
  const [updateProduct, { isLoading, isError, isSuccess, reset }] =
    useUpdateProductMutation();

  const { refetch } = useGetProductsQuery();

  if (isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  if (isError) {
    return Toast("Product update failed", "error");
  }
  if (isSuccess) {
    reset();
    closeModal();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      price: parseFloat(e.target.price.value),
      description: e.target.description.value,
      category: e.target.category.value,
      brand: e.target.brand.value,
      stock_quantity: parseFloat(e.target.stockQuantity.value),
      rating: parseFloat(e.target.rating.value),
      image: e.target.image.files[0],
    };

    try {
      await updateProduct({ data, id: product._id });
      Toast("Product updated successfully", "success");
      refetch();
    } catch (error) {
      return Toast(error.message, "error");
    }
  };

  if (!isOpen) return null;

  return (
    <dialog open className="modal modal-open">
      <div className="border-amber-500 modal-box max-w-[600px]">
        <div className="relative border p-8">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-5 top-8 text-gray-500 hover:text-amber-500 text-2xl"
            onClick={closeModal}
            aria-label="Close"
          >
            ✕
          </button>
          <h3 className="font-bold mb-4 text-amber-500 text-center text-2xl">
            Update Product
          </h3>
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-sm font-bold mb-2 text-gray-700"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-2 py-1 border p-5 rounded-lg"
                placeholder="Enter product name"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="price"
                className="block text-sm font-bold mb-2 text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                className="w-full px-2 py-1 border rounded-lg text-gray-900"
                placeholder="Enter product price"
                step="any"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="description"
                className="block text-sm font-bold mb-2 text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                className="w-full px-2 py-1 border rounded-lg text-gray-900"
                placeholder="Enter product description"
                rows="2"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="category"
                className="block text-sm font-bold mb-2 text-gray-700"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                disabled
                value={product?.category}
                className="w-full px-2 py-1 border rounded-lg text-gray-900"
                placeholder="Enter product category"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="brand"
                className="block text-sm font-bold mb-2 text-gray-700"
              >
                Brand
              </label>
              <input
                type="text"
                name="brand"
                disabled
                value={product.brand}
                className="w-full px-2 py-1 border rounded-lg text-gray-900"
                placeholder="Enter product brand"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="stockQuantity"
                className="block text-sm font-bold mb-2 text-gray-700"
              >
                Stock Quantity
              </label>
              <input
                type="number"
                name="stockQuantity"
                className="w-full px-2 py-1 border rounded-lg text-gray-900"
                placeholder="Enter stock quantity"
                step="any"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="rating"
                className="block text-sm font-bold mb-2 text-gray-700"
              >
                Rating (0-5)
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                disabled
                value={product.rating}
                className="w-full px-2 py-1 border rounded-lg text-gray-900"
                placeholder="Enter product rating"
                step="any"
                min="0"
                max="5"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="image"
                className="block text-sm font-bold mb-2 text-gray-700"
              >
                Product Image
              </label>
              <input
                type="file"
                name="image"
                className="w-full px-2 py-1 border rounded-lg"
              />
            </div>
            <div className="flex justify-center py-2 space-x-4">
              <button
                type="submit"
                className="btn bg-amber-500 text-white hover:bg-amber-600"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

// PropTypes validation
UpdateProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    brand: PropTypes.string,
    stock_quantity: PropTypes.number,
    rating: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default UpdateProductModal;
