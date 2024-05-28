import axios from "axios";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
 

const MangeAllRecipe = () => {
  // eslint-disable-next-line no-unused-vars
  //always set array when looping system with async await 
  const [recepieState, setRecipeState] = useState([]);

  useEffect(() => {
    async function recipeFunc() {
      const data = await axios.get("http://localhost:3001/recipes");
      console.log(data)
      if(data?.status===200){

        setRecipeState(data.data);
      }
    }

    recipeFunc();
  }, []);
  console.log(recepieState);
  return (
    <div>
    
    <h2 className="text-4xl font-bold text-center mb-20">Discover Delicious <span className="text-orange-600">Recipes</span></h2>

      <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-2 gap-y-5">
          {recepieState.map((item) => <RecipeCard key={item.id} item={item}/>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MangeAllRecipe;
