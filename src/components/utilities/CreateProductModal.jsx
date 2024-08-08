import PropTypes from "prop-types";

const CreateProductModal = ({ isOpen, closeModal }) => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedData = {
      name: e.target.name.value,
      price: parseFloat(e.target.price.value), // Convert to number
      description: e.target.description.value,
      category: e.target.category.value,
      brand: e.target.brand.value,
      stockQuantity: parseFloat(e.target.stockQuantity.value), // Convert to number
      rating: parseFloat(e.target.rating.value), // Convert to number
      image: e.target.image.files[0], // Get the selected file
    };
    console.log("Form data submitted:", submittedData);
    closeModal(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box relative max-w-md p-4">
        {" "}
        {/* Reduced width and padding */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
          aria-label="Close"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4 text-blue-800">
          Add New Product
        </h3>
        <form onSubmit={handleSubmit}>
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
              className="w-full px-2 py-1 border rounded-lg text-gray-900"
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
              step="any" // Allow any decimal precision
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
              rows="2" // Reduced height
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
              step="any" // Allow any decimal precision
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
              className="w-full px-2 py-1 border rounded-lg text-gray-900"
              placeholder="Enter product rating"
              step="any" // Allow any decimal precision
              min="0" // Minimum value
              max="5" // Maximum value
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
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="btn bg-amber-500 text-white hover:bg-amber-600"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

// PropTypes validation
CreateProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CreateProductModal;
