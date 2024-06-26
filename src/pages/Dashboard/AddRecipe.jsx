import axios from "axios";
import { useEffect, useState } from "react";

const AddRecipe = () => {
  const [recepieState, setRecipeState] = useState([]);

  useEffect(() => {
    async function recipeFunc() {
      const data = await axios.get("http://localhost:3001/recipes");
   
      if(data?.status===200){

        setRecipeState(data.data);
      }
    }

    recipeFunc();
  }, []);
  const [categoriesState, setCategoriesState] = useState([]);

  useEffect(() => {
    async function categoriesFunc() {
      const data = await axios.get("http://localhost:3001/categories");
    
      if(data?.status===200){

        setCategoriesState(data.data);
      }
    }

    categoriesFunc();
  }, []);
 console.log(categoriesState)
  const [formData, setFormData] = useState({
    id: '',
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('name',name,'value',value)
    setFormData({ ...formData, [name]: value,id: recepieState.length+1 });
    
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Here you can perform any action with the form data
    setIsModalOpen(true);
   await axios.post('http://localhost:3001/recipes',formData)
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Recipe</h2>

      <form onSubmit={handleSubmit}>
       

        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="block  w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

        <label className="block ">
          Category:
          <select
            type="text"
            name="category"
             
               
            onChange={handleChange}
            className="block w-full my-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-4"
          >
            {
              categoriesState.map(category=> <option  key={category?.id}value={category?.title}>{category?.title}</option>)
            }
          </select>
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed  inset-0  flex items-center justify-center bg-black bg-opacity-50">
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