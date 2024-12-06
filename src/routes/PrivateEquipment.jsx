import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateEquipment = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
  return <div></div>;
};

export default PrivateEquipment;
