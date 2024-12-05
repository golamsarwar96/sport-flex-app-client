import React from "react";
import { useLoaderData } from "react-router-dom";

const AllEquipment = () => {
  const equipments = useLoaderData();
  const {
    photo,
    itemName,
    category,
    description,
    price,
    rating,
    customization,
    processing,
    quantity,
  } = equipments || {};
  return (
    <div className="overflow-x-auto my-10">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {equipments.map((equipment, index) => (
            <tr>
              <td>{equipment.itemName}</td>
              <td>{equipment.category}</td>
              <td>{equipment.price}</td>
              <button className="mt-[8px] bg-cyan-950 border-none  text-white  md:px-4 md:py-1 px-3 py-1 rounded-full">
                View Details
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEquipment;
