/* eslint-disable react/prop-types */
import { FcLike } from "react-icons/fc";
const RecipeCard = ({ item }) => {
  const { id, image, title, description, price } = item;
  return (
    <li className="relative overflow-hidden  shadow-sm hover:shadow-orange-600 rounded-2xl transform transition-transform duration-200 w-full md:w-[290px] h-[330px] mx-auto delay-75 ">
      <div className="card glass h-full ">
        <div className="relative hover:scale-105 transition-all delay-75">
          <img
            src={image}
            alt={title}
            className="w-full h-[330px] object-cover   transition-transform duration-300 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <h2 className="card-title text-white text-xl font-semibold mb-2">
              {title}
            </h2>
            <p className="text-sm text-gray-300 mb-4 p-4">{description}</p>
            <div className="grid grid-cols-2 justify-center items-center gap-5 ">
              <p className="text-lg font-bold text-amber-600 ">${price}</p>
              <span>
                {" "}
                <FcLike className="w-[100px] h-[40px]" />
              </span>

              <button className="btn bg-base-300 hover:bg-orange-500 text-black hover:text-white">
                Details
              </button>
              <button className="btn bg-base-300 hover:bg-orange-500 text-black hover:text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RecipeCard;
