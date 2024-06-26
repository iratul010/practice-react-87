import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner";

const RecipeMaintenance = () => {
  const { loading } = useAuth();
  const [dataState, setDataState] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false); // optional state to handle delete loading state

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setDataState(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm(`Are you sure you want to delete recipe with ID ${id}?`);
  
    // Proceed with deletion only if the user clicks "Yes"
    if (confirmDelete) {
      setIsDeleting(true);
      try {
        await axios.delete(`http://localhost:3001/recipes/${id}`);
        // Update the state to remove the deleted item
        setDataState(dataState.filter(item => item.id !== id));
        
      } catch (error) {
        console.error("Error deleting recipe:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  };
  

  if (loading || isDeleting) {
    return <LoadingSpinner />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-3 sm:px-6 sm:py-3 text-left text-sm font-semibold uppercase">ID</th>
            <th className="px-4 py-3 sm:px-6 sm:py-3 text-left text-sm font-semibold uppercase">Title</th>
            <th className="px-4 py-3 sm:px-6 sm:py-3 text-left text-sm font-semibold uppercase">Price</th>
            <th className="px-4 py-4 sm:px-6 sm:py-4 text-left text-sm font-semibold uppercase">Description</th>
            <th className="px-4 py-3 sm:px-6 sm:py-3 text-left text-sm font-semibold uppercase">Category</th>
            <th className="px-4 py-3 sm:px-6 sm:py-3 text-left text-sm font-semibold uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {dataState.map(item => (
            <tr key={item.id} className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-50">
              <td className="px-4 py-4 sm:px-6 sm:py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-4 py-4 sm:px-6 sm:py-4 whitespace-nowrap">{item.title}</td>
              <td className="px-4 py-4 sm:px-6 sm:py-4 whitespace-nowrap">${item.price}</td>
              <td className="px-4 py-4 sm:px-6 sm:py-4 whitespace-nowrap">{item.description}</td>
              <td className="px-4 py-4 sm:px-6 sm:py-4 whitespace-nowrap">{item.category}</td>
              <td className="px-4 py-4 sm:px-6 sm:py-4 whitespace-nowrap">
                <Link to={`/dashboard/edit-recipe/${item?.id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md transition duration-300">Edit</Link>
                <button onClick={() => handleDelete(item.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeMaintenance;
