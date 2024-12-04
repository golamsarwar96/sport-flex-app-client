import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const newUser = {
          name,
          photo,
          email,
          password,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user created to sportflex db", data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User Created successfully.",
                icon: "success",
                confirmButtonText: "COOL!",
              });
            }
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center gap-5 flex-col my-10">
      <h1 className="text-center text-4xl">Register To SportFlex</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl relative ">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter a valid photo URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <h1 className="text-center mt-4">
            Alreay have an account ?{" "}
            <Link className="text-cyan-700" to="/login">
              Login
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Register;
