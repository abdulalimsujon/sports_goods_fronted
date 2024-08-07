import { useState } from "react";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "", price: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    const newProduct = {
      id: Date.now().toString(),
      name: formData.name,
      price: formData.price,
    };
    setProducts([...products, newProduct]);
    setFormData({ id: "", name: "", price: "" });
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleEditProduct = (product) => {
    setFormData(product);
    setIsEditing(true);
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    setProducts(
      products.map((product) =>
        product.id === formData.id ? formData : product
      )
    );
    setFormData({ id: "", name: "", price: "" });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Manager</h1>
      <form
        onSubmit={isEditing ? handleUpdateProduct : handleAddProduct}
        className="mb-4 p-4 border rounded"
      >
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </form>

      <h2 className="text-xl font-bold mb-2">Products</h2>
      <ul className="list-disc pl-5">
        {products.map((product) => (
          <li
            key={product.id}
            className="mb-2 flex justify-between items-center"
          >
            <div>
              <span className="font-bold">{product.name}</span>: $
              {product.price}
            </div>
            <div>
              <button
                onClick={() => handleEditProduct(product)}
                className="px-2 py-1 bg-yellow-500 text-white rounded-md mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="px-2 py-1 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProduct;
