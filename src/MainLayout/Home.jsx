import { useContext } from "react";
import Banner from "../components/Banner";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const equipments = useLoaderData();
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <h1>Equipments:{equipments.length}</h1>
      </section>
    </div>
  );
};

export default Home;
