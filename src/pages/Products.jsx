import { useEffect, useState } from "react";

const Products = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch("http://localhost:3001/recipes");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        console.log(data);
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center px-20 gap-10">
      <h2 className="text-3xl font-bold text-white">
        Welcome to Our Restaurant!
      </h2>
      <h5 className="text-slate-300">
        Welcome to [Restaurant Name], where culinary excellence meets
        exceptional service. Our passion for food drives us to create
        unforgettable dining experiences for our guests.{" "}
      </h5>
      <ul className="flex flex-row justify-center md:flex-row">
        {recipes.slice(0, 3).map((item) => (
          <li
            key={item.id}
            className="m-4 shadow-sm hover:shadow-orange-600 hover:rounded-2xl transform transition-transform duration-200 hover:scale-105"
          >
            <div className="card w-96 md:w-80 glass ">
              <img
                src={item.image}
                alt={item.title}
                className="w-[100%] md:h-52 rounded-lg"
              />

              <div className="card-body">
                <h2 className="card-title text-white text-xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-orange-500">
                    ${item.price}
                  </p>
                  <button className="btn  bg-base-300 hover:bg-orange-500">Add to Cart</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
