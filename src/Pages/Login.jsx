import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Logged In Successfully");
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`http://localhost:5000/users`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-center items-center gap-5 flex-col my-10">
      <h1 className="text-center text-4xl">Login To SportFlex</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl relative ">
        <form onSubmit={handleLogin} className="card-body">
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
            <button className="btn btn-primary">Login</button>
          </div>
          <h1 className="text-center mt-4">
            New to SportFlex ?{" "}
            <Link className="text-cyan-700" to="/register">
              Register Here
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
