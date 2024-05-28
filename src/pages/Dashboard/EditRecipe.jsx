import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditRecipe = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  
  const [categoriesState, setCategoriesState] = useState([]);
  const [singleRecipe, setSingleRecipe] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Set the initial selected category
    if (singleRecipe.id === id) {
      setSelectedCategory(singleRecipe.category);
    }
  }, [singleRecipe, id]);
 

  useEffect(() => {
    async function singleRecipeFunc() {
      const singleData = await axios.get(`http://localhost:3001/recipes/${id}`);

      if (singleData?.status === 200) {
        setSingleRecipe(singleData.data);
      }
    }

    singleRecipeFunc();
  }, [id]);

  useEffect(() => {
    async function categoriesFunc() {
      const data = await axios.get("http://localhost:3001/categories");

      if (data?.status === 200) {
        setCategoriesState(data.data);
      }
    }

    categoriesFunc();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsModalOpen(true);
    const title = e.target.title.value
    const price = e.target.price.value
    const description = e.target.description.value
    const image = e.target.image.value
    const category = e.target.category.value
    
    
  
      async function  updateFunc (){
        await axios.patch(`http://localhost:3001/recipes/${id}`,{title,price,description,image,category})
      }
      
      updateFunc()
    navigate('/dashboard/recipe-maintain')
   
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
            
            defaultValue={singleRecipe?.title}
            className="block text-slate-900  w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block mb-2">
          Price:
          <input
            type="number"
            name="price"
            
            defaultValue={singleRecipe?.price}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block mb-2">
          Description:
          <textarea
            name="description"
            
            defaultValue={singleRecipe?.description}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </label>

        <label className="block mb-2">
          Image:
          <input
            type="text"
            name="image"
            
            defaultValue={singleRecipe?.image}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block ">
          Category:
          <select
            type="text"
            name="category"
            value={selectedCategory?.title}
            
            className="block w-full my-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-4"
          >
            {categoriesState.map((category) => (
              <option key={category?.title} >
                {category?.title}
              </option>
            ))}
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

export default EditRecipe;
