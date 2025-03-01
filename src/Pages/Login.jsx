import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import Loading from "../components/Loading";
import { BsGoogle } from "react-icons/bs";
import loginImg from "../assets/login.jpg";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userLogin, setUser, loading, setLoading, signInWithGoogle } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();

  if (loading) {
    return <Loading></Loading>;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    e.target.reset();
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("Logged In Successfully");
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`https://sport-flex-server.vercel.app/users`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Google Login Successful");
        // console.log(user);
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center gap-5 flex-col bg-cyan-950">
      <h1 className="text-center text-white text-4xl mt-10 mb-5">
        Welcome Back To <span className="text-amber-500">SportFlex</span>
      </h1>
      <div className="lg:w-[70%] w-full mx-auto flex px-16 bg-cyan-800 pt-10 flex-col lg:flex-row">
        <div>
          <img
            className="lg:w-[456px] md:w-full w-[456px] object-cover lg:rounded-tl-2xl lg:rounded-bl-2xl"
            src={loginImg}
            alt=""
          />
        </div>
        <div className=" bg-gray-100 lg:w-1/2 w-full shrink-0 shadow-2xl relative mb-10 flex justify-center items-center lg:rounded-tr-2xl lg:rounded-br-2xl">
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-sm absolute rounded-full right-10 top-[168px] bg-white border-none"
              >
                <FaEye></FaEye>
              </button>

              <label className="label">
                <Link
                  to="/resetpassword"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-cyan-950 text-white">Login</button>
            </div>
            <div>
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-amber-500 text-cyan-800 font-extrabold w-full"
              >
                <BsGoogle></BsGoogle> Sign In With Google
              </button>
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
    </div>
  );
};

export default Login;
