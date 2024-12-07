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
import Blog from "../components/Blog";
import PrivateEquipment from "./PrivateEquipment";
import PrivateList from "./PrivateList";
import PrivateDetails from "./PrivateDetails";
import UpdateEquipment from "../components/UpdateEquipment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch("http://localhost:5000/equipmentslimited"),
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
        element: (
          <PrivateEquipment>
            <AddEquipment></AddEquipment>,
          </PrivateEquipment>
        ),
      },
      {
        path: "/myequipment",
        element: (
          <PrivateList>
            <MyEquipment></MyEquipment>
          </PrivateList>
        ),
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/myequipment/:id",
        element: <UpdateEquipment></UpdateEquipment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipments/${params.id}`),
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
        element: (
          <PrivateDetails>
            <EquipmentDetails></EquipmentDetails>
          </PrivateDetails>
        ),
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "allequipment/:id",
        element: (
          <PrivateDetails>
            <EquipmentDetails></EquipmentDetails>
          </PrivateDetails>
        ),
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
