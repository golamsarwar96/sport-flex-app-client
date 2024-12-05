import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../MainLayout/Home";
import AllEquipment from "../components/AllEquipment";
import AddEquipment from "../components/AddEquipment";
import MyEquipment from "../components/MyEquipment";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ResetPassword from "../Pages/ResetPassword";
import Cards from "../components/Cards";
import EquipmentDetails from "../components/EquipmentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch("http://localhost:5000/equipments/limited"),
          },
          {
            path: "/category/:category",
            element: <Cards></Cards>,
            loader: () => fetch("http://localhost:5000/equipments"),
          },
        ],
      },

      {
        path: "/allequipment",
        element: <AllEquipment></AllEquipment>,
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/addequipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/myequipment",
        element: <MyEquipment></MyEquipment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/:id",
        element: <EquipmentDetails></EquipmentDetails>,
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "allequipment/:id",
        element: <EquipmentDetails></EquipmentDetails>,
        loader: () => fetch(`http://localhost:5000/equipments`),
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword></ResetPassword>,
  },
]);

export default router;
