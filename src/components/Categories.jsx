import { NavLink, useLoaderData } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex justify-center gap-32 my-10">
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-amber-500 border-none  text-cyan-950  md:px-10 md:py-4 px-3 py-1 rounded-full"
              : "bg-cyan-950 border-none  text-white  md:px-10 md:py-4 px-3 py-1 rounded-full"
          }
          key={category.category}
          to={`/category/${category.category}`}
        >
          <button className="">{category.category}</button>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
