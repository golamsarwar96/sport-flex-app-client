import { Link, useLoaderData } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex justify-center gap-32 my-10">
      {categories.map((category) => (
        <Link key={category.category} to={`/category/${category.category}`}>
          <button className="bg-cyan-950 border-none  text-white  md:px-10 md:py-4 px-3 py-1 rounded-full">
            {category.category}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
