import { useContext } from "react";
import Banner from "../components/Banner";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <Banner></Banner>
    </section>
  );
};

export default Home;
