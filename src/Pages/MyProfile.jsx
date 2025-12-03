import React, { useContext, useState } from "react";
import Container from "../Components/Container/Container";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const MyProfile = () => {
  const navigate = useNavigate();
  const { user, updateProfileFunc } = useContext(AuthContext);
  // console.log(user);
  const { displayName, email, photoURL } = user;
  const [emailvalue, setEmailValue] = useState(email || "");
  const [showUpdate, setUpdate] = useState(false);
  const updateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateProfileFunc(user, name, photo)
      .then(() => {
        toast.success("Profile Updated Sucessfully");
        navigate("/user-profile");
        setUpdate(false);
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <div>
      <Container>
        <div className="m-4">
          <h1 className="text-center text-2xl font-medium">User Profile</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 bg-base-100 p-10">
          <img className="w-30 rounded-full" src={photoURL} alt="" />
          <h1>{displayName}</h1>
          <h1>{email}</h1>
          <button onClick={setUpdate} className="btn">
            Update Profile
          </button>
        </div>
        {showUpdate ? (
          <div className="flex justify-center items-center my-10 bg-primary p-10">
            <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-sm">
              <div className="card-body">
                <p className="text-2xl font-bold text-center mt-4">
                  Update Your Profile
                </p>
                <form onSubmit={updateProfile} className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                    name="email"
                    value={emailvalue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter Your Name"
                    name="name"
                    required
                  />

                  <label className="label"> Photo-URL</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder=" Photo-URL"
                    name="photo"
                    required
                  />
                  <button className="btn btn-primary my-4">
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default MyProfile;
