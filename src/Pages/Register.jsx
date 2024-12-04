import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const Register = () => {
  const { createUser, setUser, updateUserProfile, loading } =
    useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    //Name length validation
    // if (name.length < 5) {
    //   setError({ ...error, name: "Name must be at least 5 characters long." });
    //   toast.error("Name must be more than 5 characters long.");
    //   return;
    // }

    //Password Validation
    // const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    // if (!regex.test(password)) {
    //   toast.error(
    //     "The password must be 6 characters & should contain at least one uppercase letter and one lowercase letter."
    //   );
    //   return;
    // }

    //Creating User
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
        setUser(result.user);
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
        toast.error(err.message);
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
