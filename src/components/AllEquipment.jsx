import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipment = () => {
  const equipments = useLoaderData();
  const [sortedEquipments, setSortedEquipments] = useState(equipments);
  <Helmet>
    <title>SportFlex | Equipment</title>
  </Helmet>;
  const handleSort = () => {
    const sorted = [...equipments].sort((a, b) => b.price - a.price);
    setSortedEquipments(sorted);
  };

  return (
    <div className="overflow-x-auto my-10 p-4 m:p-0">
      <div className="flex justify-center mb-5">
        <button
          className="bg-cyan-950 text-white px-8 py-3 rounded-3xl flex items-center gap-2"
          onClick={handleSort}
        >
          Sort By Price <RiMoneyDollarBoxFill className="text-2xl" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center mb-2">
        {sortedEquipments.map((equipment) => (
          <div className="bg-base-100 w-[80%] mx-auto h-[90%] shadow-xl p-3 hover:shadow-2xl mb-10 relative rounded-3xl">
            <figure>
              <img
                className="w-72 h-72 mx-auto object-cover rounded-xl"
                src={equipment.photo}
                alt="Shoes"
              />
            </figure>
            <div className="p-3 space-y-1">
              <h2 className="text-xl font-bold text-center mb-2">
                {equipment.itemName}
              </h2>
              <div className="flex">
                <p className="mx-auto text-center px-1 py-1 bg-cyan-950 w-full text-white">
                  {equipment.category}
                </p>
                <p className="mx-auto text-center px-1 py-1 bg-cyan-950 absolute top-7 right-8 text-white">
                  ${equipment.price}
                </p>
                <p className="mx-auto flex items-center justify-center gap-2 text-center md:px-3 px-4 py-1 bg-cyan-950 w-full text-white">
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  {equipment.rating}
                </p>
              </div>

              <div className="card-actions flex justify-center">
                <Link to={`/${equipment._id}`}>
                  <button className="bg-amber-400 border-none  text-cyan-900  md:px-4 md:py-2 px-4 py-3 rounded-full mt-3">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {sortedEquipments.map((equipment, index) => (
            <tr>
              <td>{equipment.itemName}</td>
              <td>{equipment.category}</td>
              <td>{equipment.price}</td>
              <Link to={`${equipment._id}`}>
                <button className="mt-[8px] bg-cyan-950 border-none  text-white  md:px-4 px-2 md:py-1 py-1 rounded-full">
                  View Details
                </button>
              </Link>
            </tr>
          ))} */}
    </div>
  );
};

export default AllEquipment;
