import React from "react";
import toast from "react-hot-toast";

const BookSession = () => {
  const handleonSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Submit Sucessfully");
  };
  return (
    <div>
      <div className="flex justify-center items-center py-6">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center  pt-10">
            Book Session
          </h2>
          <form onSubmit={handleonSubmit} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                required
                className="input"
                placeholder="Name"
              />
              {/* email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <button className="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookSession;
