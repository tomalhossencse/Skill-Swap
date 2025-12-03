import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
const Signup = () => {
  const [show, setShow] = useState(false);
  const { setUser, handleSignUpFunc, updateProfileFunc } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;
    try {
      const res = await handleSignUpFunc(email, password);
      await updateProfileFunc(res.user, displayName, photoURL);
      setUser(res.user);
      toast.success("Signup Successfully!");
      navigate("/");
      form.reset();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center top-20 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <p className="text-2xl font-bold text-center mt-4">Signup</p>
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Name"
              name="name"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label"> Photo-URL</label>
            <input
              type="text"
              className="input"
              placeholder=" Photo-URL"
              name="photo"
              required
            />
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={show ? "text" : "password"}
                className="input"
                placeholder="Password"
                name="password"
                required
                pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                title="Password must be at least 6 characters long and include both uppercase and lowercase letters."
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute top-[30px] right-8 cursor-pointer z-50"
              >
                {show ? <FaEye size={20} /> : <IoEyeOff size={20} />}
              </span>
            </div>

            <button className="btn btn-neutral mt-4">Signup</button>
            <div className="text-center mt-3">
              <p className="text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-700 hover:text-red-500 font-medium underline"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
