import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-5xl">Navbar : {user.name}</h1>
    </div>
  );
};

export default Navbar;
