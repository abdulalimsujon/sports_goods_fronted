import PropTypes from "prop-types";
import {
  useAddProductMutation,
  useGetProductsQuery,
} from "../../redux/api/api";
import LoaderSpinner from "./LoaderSpinner";
import Toast from "./Toast";

const CreateProductModal = ({ isOpen, closeModal }) => {
  const [addProduct, { isLoading, isError, isSuccess, reset }] =
    useAddProductMutation();
  const { isLoading: isLoadingf, refetch } = useGetProductsQuery();

  if (isLoading || isLoadingf) {
    return <LoaderSpinner />;
  }

  if (isError) {
    Toast("Product creation failed", "error");
  }

  if (isSuccess) {
    reset();
    closeModal();
    Toast("Product created successfully", "success");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    try {
      await addProduct(formData).unwrap();
      refetch();
    } catch (error) {
      Toast(error.message, "error");
    }
  };

  if (!isOpen) return null;

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box max-w-md">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={closeModal}
        >
          ✕
        </button>
        <h3 className="text-lg font-bold text-center">Add New Product</h3>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            placeholder="Product Name"
            required
          />
          <input
            type="number"
            name="price"
            className="input input-bordered w-full"
            placeholder="Price"
            step="any"
            required
          />
          <input
            type="text"
            name="category"
            className="input input-bordered w-full"
            placeholder="Category"
          />
          <input
            type="text"
            name="brand"
            className="input input-bordered w-full"
            placeholder="Brand"
          />
          <input
            type="number"
            name="stockQuantity"
            className="input input-bordered w-full"
            placeholder="Stock Quantity"
            step="1"
          />
          <input type="file" name="image" className=" w-full border" required />
          <button type="submit" className="btn btn-primary w-full">
            Save Product
          </button>
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
