import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import contactUsImg from "../assets/contactUs.jpg";
import toast from "react-hot-toast";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const publicKey = "_S7cdpqMFl3Bo06Rc";
    const serviceId = "service_cvdo44g";
    const templateId = "template_8qj7ph9";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Golam Sarwar",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log(res);
        setName("");
        setEmail("");
        setMessage("");
        toast.success(
          "Successfully Sent An Email. We Will Get Back To You Soon"
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div id="contactMe" className="p-10 bg-cyan-950">
      <h1 className="text-5xl font-bold text-center text-amber-500 mt-3 mb-10">
        CONTACT US
      </h1>
      <div className="flex lg:gap-0 md:gap-10 justify-center items-center flex-col md:flex-row">
        <div className="card bg-base-100 lg:w-1/3 mx-auto md:w-[65%] shadow-2xl px-30">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea px-2 border-1 mt-5 border-gray-300"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="form-control ">
              <input
                type="submit"
                className="btn bg-cyan-950 text-amber-500 "
                value="Send"
              />
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <img className="w-[80%] mx-auto" src={contactUsImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
