import React from "react";
import { useLoaderData } from "react-router-dom";

const AllEquipment = () => {
  const equipments = useLoaderData();
  return (
    <div>
      <h1 className="text-5xl">All Equipment : {equipments.length}</h1>
    </div>
  );
};

export default AllEquipment;
