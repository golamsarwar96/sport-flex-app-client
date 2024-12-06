import { useLoaderData } from "react-router-dom";

const UpdateEquipment = () => {
  const equipment = useLoaderData();
  return (
    <div>
      <h1 className="text-5xl">Update : {equipment.itemName} e</h1>
    </div>
  );
};

export default UpdateEquipment;
