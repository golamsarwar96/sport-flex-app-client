import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const data = useLoaderData();
  //To get the category
  const { category } = useParams();
  const [equipments, setEquipments] = useState([]);
  //Filtering Cards By Category And Showing All Cards When Default.
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (equipment) => equipment.category === category
      );
      setEquipments(filteredByCategory);
    } else {
      setEquipments(data);
    }
  }, [category, data]);
  // console.log(equipments);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center mb-2 ">
        {equipments.map((equipment, index) => (
          <Card key={index} equipment={equipment}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
