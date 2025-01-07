import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";
import signUpImg from "../assets/signup.jpg";

const Register = () => {
  const { createUser, setUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, email, password);

    if (name.length < 5) {
      toast.error("Name must be more than 5 characters long.");
      return;
    }

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!regex.test(password)) {
      toast.error(
        "The password must be 6 characters & should contain at least one uppercase letter and one lowercase letter."
      );
      return;
    }
    e.target.reset();
    //Creating User
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        const newUser = {
          name,
          photo,
          email,
          password,
        };
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((err) => {
            // console.log(err);
            toast.error(err);
          });
        setUser(result.user);

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("user created to sportflex db", data);
            if (data.insertedId) {
              navigate(location?.state ? location.state : "/");
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
        toast.error(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Google Login Successful");
        // console.log(user);
        setUser(user);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center gap-5 flex-col bg-cyan-950">
      <h1 className="text-center text-white text-4xl mt-10 mb-5">
        Welcome To <span className="text-amber-500">SportFlex</span>
      </h1>
      <div className="lg:w-[70%] w-full mx-auto flex px-16 bg-cyan-800 pt-10 flex-col lg:flex-row">
        <div>
          <img
            className="lg:w-[600px] md:w-full w-[600px] h-[608px] object-cover lg:rounded-tl-2xl lg:rounded-bl-2xl"
            src={signUpImg}
            alt=""
          />
        </div>
        <div className="bg-gray-100 lg:w-1/2 w-full shrink-0 shadow-2xl relative mb-10 flex justify-center items-center lg:rounded-tr-2xl lg:rounded-br-2xl">
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
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-cyan-950 text-white">Register</button>
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
              Alreay have an account ?{" "}
              <Link className="text-cyan-700" to="/login">
                Login
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
