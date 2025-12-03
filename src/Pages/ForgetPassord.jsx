import React, { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
const ForgetPassord = () => {
  const { handleForgetPasswordFunc } = useContext(AuthContext);
  const emailRef = useRef();
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    handleForgetPasswordFunc(email)
      .then(() => {
        toast.success("Please Check Your Email to Reset Password");
        window.location.href = "https://mail.google.com";
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <div className="flex items-center justify-center top-20 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          {" "}
          <form className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter Your Email"
              name="email"
              required
              ref={emailRef}
            />
            <button
              onClick={handleForgetPassword}
              type="button"
              className="btn btn-neutral mt-4"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassord;
