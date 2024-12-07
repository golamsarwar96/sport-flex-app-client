import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const AllEquipment = () => {
  const equipments = useLoaderData();
  const [sortedEquipments, setSortedEquipments] = useState(equipments);

  const handleSort = () => {
    const sorted = [...equipments].sort((a, b) => b.price - a.price);
    setSortedEquipments(sorted);
  };

  return (
    <div className="overflow-x-auto my-10 p-4 m:p-0">
      <div>
        <button onClick={handleSort}>Sort</button>
      </div>
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
          {sortedEquipments.map((equipment, index) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEquipment;
