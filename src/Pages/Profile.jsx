import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import Container from "../Components/Container/Container";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, logoutFunc } = use(AuthContext);
  const { displayName, email, photoURL } = user;
  const navigate = useNavigate();
  const name = displayName.toUpperCase();
  const logout = () => {
    logoutFunc()
      .then(() => {
        navigate("/login");
        toast.success("Logout Sucessfully!");
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <Container className="flex flex-col items-center justify-center min-h-[90vh] px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300 border border-gray-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/50 ring-offset-2">
              <img
                src={photoURL}
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary">{name}</h1>
            <p className="text-accent mt-1">{email}</p>
          </div>

          <div className="flex gap-3">
            <button onClick={logout} className="btn btn-outline btn-sm px-5">
              Logout
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
