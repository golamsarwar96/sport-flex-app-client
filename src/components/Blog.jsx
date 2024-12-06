import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div>
      <h1>dsadsasa</h1>
    </div>
  );
};

export default Blog;
