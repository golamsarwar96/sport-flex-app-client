import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const EquipmentDetails = () => {
  const equipmentData = useLoaderData();
  const { id } = useParams();
  const [equipments, setEquipments] = useState({});

  useEffect(() => {
    const singleData = equipmentData.find((equipment) => equipment._id === id);
    setEquipments(singleData);
  }, [equipmentData, id]);
  return (
    <div className="bg-cyan-900 min-h-screen flex justify-center items-center">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={equipments.photo}
          className=" w-[370px] h-[450px] object-cover rounded-lg shadow-2xl"
        />
        <div className="space-y-2 text-white w-[50%]">
          <h1 className="text-5xl font-bold">{equipments.itemName}</h1>
          <p className="text-sm">{equipments.description}</p>
          <p className="text-2xl">Cateogry : {equipments.category}</p>
          <p className="text-xl">Price : ${equipments.price}</p>
          <p>Customization : {equipments.customization}</p>
          <p>Quantity : {equipments.quantity}</p>
          <p>Processing Time : {equipments.processing}</p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
