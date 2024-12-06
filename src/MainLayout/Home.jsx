import { useContext } from "react";
import Banner from "../components/Banner";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Blog from "../components/Blog";
const Home = () => {
  const categories = useLoaderData();
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
        <Categories categories={categories}></Categories>
      </section>

      <section>
        <Outlet></Outlet>
      </section>

      <section>
        <Blog></Blog>
      </section>
    </div>
  );
};

export default Home;
