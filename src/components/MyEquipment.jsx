import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "./Loading";
import { BsClock } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { MdDeleteForever, MdEditDocument, MdUpdate } from "react-icons/md";

const MyEquipment = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  const equipments = useLoaderData();
  const { _id } = equipments;
  // console.log(equipments);
  const [myEquipments, setMyEquipments] = useState([]);
  useEffect(() => {
    const equipmentList = [...equipments].filter(
      (equipment) => equipment?.email === user?.email
    );
    // console.log(equipmentList);
    setMyEquipments(equipmentList);
  }, []);

  //Deleting
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/equipments/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = myEquipments.filter(
                (myEquipment) => myEquipment._id !== _id
              );
              setMyEquipments(remaining);
            }
          });
      }
    });
  };
  return (
    <div className=" my-10 lg:pl-10 pl-5 md:pr-4">
      <h1 className="text-5xl text-center my-10">
        My Equipment <span className="text-amber-500">List</span>
      </h1>
      <div className="">
        {/* {myEquipments.map((equipment, index) => (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden max-w-sm hover:shadow-md transition-shadow duration-300">
            <img src={equipment.photo} className="w-full h-72 object-cover" />
            <div className="p-5 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900 text-2xl">
                    {equipment.itemName}
                  </h3>
                  <p className="text-sm text-gray-500">{equipment.category}</p>
                </div>
                <p className="text-lg font-semibold text-gray-900">
                  Price : ${equipment.price}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-base flex items-center gap-1 text-gray-500">
                  Rating :<FaStar className="text-amber-400"></FaStar>(
                  {equipment.rating}/5)
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  {equipment.customization}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BsClock></BsClock>
                  <span>{equipment.processing}</span>
                </div>

                <div className="text-sm text-gray-600">
                  <span className="font-bold">
                    Quantity : {equipment.quantity}
                  </span>{" "}
                  available
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2">
                {equipment.description}
              </p>
            </div>
            <div className="flex gap-2 pt-2 p-5">
              <Link to={`/myequipment/${equipment._id}`}>
                <button className="px-5 py-2 text-white bg-cyan-900 rounded-3xl">
                  Update
                </button>
              </Link>
              <button
                className="px-5 py-2 bg-amber-500 text-cyan-800 rounded-3xl"
                onClick={() => handleDelete(equipment._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))} */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            {myEquipments.map((equipment, index) => (
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={equipment.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{equipment.itemName}</td>
                  <td>${equipment.price}</td>
                  <th>
                    <div className="flex gap-2 pt-2">
                      <Link to={`/myequipment/${equipment._id}`}>
                        <button className="px-5 py-2 text-white bg-cyan-900 rounded-3xl">
                          <MdEditDocument className="text-xl" />
                        </button>
                      </Link>
                      <button
                        className="px-5 py-2 bg-amber-500 text-cyan-800 rounded-3xl"
                        onClick={() => handleDelete(equipment._id)}
                      >
                        <MdDeleteForever className="text-xl" />
                      </button>
                    </div>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEquipment;
