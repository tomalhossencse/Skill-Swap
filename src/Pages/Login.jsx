import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { handleGoogleSigninFunc, handleSignInFunc, setUser } =
    useContext(AuthContext);
  const handleGoogleSignin = () => {
    handleGoogleSigninFunc()
      .then(() => {
        toast.success("SignIn with Google SuccessFully!");
        navigate(location?.state || "/");
      })
      .catch((e) => toast.error(e.message));
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    handleSignInFunc(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login Sucessfully");
        navigate(location?.state || "/");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="flex items-center justify-center top-20 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <p className="text-2xl font-bold text-center mt-4">Login</p>
          <form onSubmit={handleSignIn} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
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
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute top-[30px] right-8 cursor-pointer z-50"
              >
                {show ? <FaEye size={20} /> : <IoEyeOff size={20} />}
              </span>
            </div>
            <div>
              <button
                onClick={() => navigate("/forget-password")}
                className="link link-hover"
                type="button"
              >
                Forgot password?
              </button>
            </div>

            <button className="btn btn-neutral mt-4">Login</button>
            <div className="text-center mt-3">
              <p className="text-sm">
                No User ?{" "}
                <Link
                  to="/signup"
                  className="text-blue-700 hover:text-red-500 font-medium underline"
                >
                  Signup
                </Link>
              </p>
            </div>
            <button type="button" onClick={handleGoogleSignin} className="btn">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
