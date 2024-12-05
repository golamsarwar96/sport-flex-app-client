import { BiStar } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const Card = ({ equipment }) => {
  const { itemName, category, photo, price, rating } = equipment || {};
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-3">
      <figure>
        <img
          className="w-[360px] h-[360px] object-cover rounded-xl"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="p-3 space-y-1">
        <h2 className="text-2xl font-bold text-center mb-2">{itemName}</h2>
        <p className="mx-auto text-center px-1 py-1 bg-cyan-950 w-[30%] text-white">
          {category}
        </p>
        <p className="mx-auto text-center px-1 py-1 bg-cyan-950 w-[45%] text-white">
          Price : ${price}
        </p>
        <p className="mx-auto flex items-center justify-center gap-2 text-center px-1 py-1 bg-cyan-950 w-[50%] text-white">
          Rating :<FaStar className="text-yellow-400"></FaStar>
          {rating}
        </p>
        <div className="card-actions flex justify-center">
          <button className="bg-amber-400 border-none  text-cyan-900  md:px-4 md:py-2 px-3 py-1 rounded-full mt-3">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
