import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import SkillDetails from "../Pages/SkillDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";
import ForgetPassord from "../Pages/ForgetPassord";
import Loding from "../Components/Loading/Loding";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Loding />,
    children: [
      {
        index: true,
        loader: () => fetch("/SkillListings.json"),
        Component: Home,
      },
      {
        path: "user-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "skill-details/:id",
        element: (
          <PrivateRoute>
            <SkillDetails></SkillDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/SkillListings.json"),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "forget-password",
        Component: ForgetPassord,
      },
    ],
  },
]);
