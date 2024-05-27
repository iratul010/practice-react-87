import { useState } from "react";

const AddRecipe = () => {
 
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action with the form data
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          ID:
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block mb-2">
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block mb-2">
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </label>

        <label className="block mb-2">
          Image:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block mb-2">
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Recipe Submitted</h3>
            <p>Your recipe has been successfully submitted!</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRecipe;