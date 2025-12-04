import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import Container from "../Components/Container/Container";
const Signup = () => {
  const [show, setShow] = useState(false);
  const {
    setUser,
    handleSignUpFunc,
    updateProfileFunc,
    handleGoogleSigninFunc,
  } = useContext(AuthContext);
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
  const handleGoogleSignin = () => {
    handleGoogleSigninFunc()
      .then(() => {
        toast.success("SignIn with Google SuccessFully!");
        navigate(location?.state || "/");
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <Container className="my-24 flex justify-center items-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-accent-content rounded-2xl p-6 hover:shadow-xl transition duration-300">
        <h1 className="text-center text-4xl font-bold text-primary mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-accent mb-6">
          Login to continue to your account
        </p>

        <div className="card-body">
          <form onSubmit={handleSignUp} className="space-y-4">
            {/* name */}
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div>
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>

            {/* photourl */}
            <div>
              <label className="label">PhotoURL</label>
              <input
                type="text"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="PhotoURL"
                name="photo"
                required
              />
            </div>

            <div className="relative">
              <label className="label font-semibold">Password</label>
              <input
                type={show ? "text" : "password"}
                className={`input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary `}
                placeholder="Enter your password"
                name="password"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute top-[34px] right-6 cursor-pointer z-50 text-gray-500"
              >
                {show ? <IoEyeOff size={16} /> : <FaEye size={16} />}
              </span>
            </div>

            <div className="flex justify-end">
              <a className="link link-hover text-sm text-primary">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="btn w-full bg-primary text-white font-bold text-md rounded-md shadow-md hover:bg-black transition-transform hover:scale-105"
            >
              Register
            </button>
          </form>

          <div className="divider text-gray-400">OR</div>

          {/* Google Login */}
          <button
            onClick={handleGoogleSignin}
            className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 w-full flex items-center justify-center gap-2"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <div className="text-center ">
            <p className="">
              Already have an account? Please{" "}
              <NavLink
                className="text-primary font-medium hover:underline"
                to={"/login"}
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
{
  /* <div className="flex items-center justify-center top-20 min-h-screen">
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
    </div> */
}
