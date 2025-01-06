import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ equipment }) => {
  const { _id, itemName, category, photo, price, rating } = equipment || {};
  return (
    <div className="bg-base-100 w-[80%] mx-auto h-[90%] shadow-xl p-3 hover:shadow-2xl mb-10 relative rounded-3xl">
      <figure>
        <img
          className="w-72 h-72 mx-auto object-cover rounded-xl"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="p-3 space-y-1">
        <h2 className="text-xl font-bold text-center mb-2">{itemName}</h2>
        <div className="flex">
          <p className="mx-auto text-center px-1 py-1 bg-cyan-950 w-full text-white">
            {category}
          </p>
          <p className="mx-auto text-center px-1 py-1 bg-cyan-950 absolute top-6 right-9 text-white">
            ${price}
          </p>
          <p className="mx-auto flex items-center justify-center gap-2 text-center md:px-3 px-4 py-1 bg-cyan-950 w-full text-white">
            <FaStar className="text-yellow-400"></FaStar>
            <FaStar className="text-yellow-400"></FaStar>
            <FaStar className="text-yellow-400"></FaStar>
            <FaStar className="text-yellow-400"></FaStar>
            <FaStar className="text-yellow-400"></FaStar>
            {rating}
          </p>
        </div>

        <div className="card-actions flex justify-center">
          <Link to={`/${_id}`}>
            <button className="bg-amber-400 border-none  text-cyan-900  md:px-4 md:py-2 px-4 py-3 rounded-full mt-3">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
