import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import SkillDetails from "../Pages/SkillDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";
import ForgetPassord from "../Pages/ForgetPassord";
import AllSkills from "../Pages/AllSkills";
import ErrorPage from "../Pages/ErrorPage";
import Profile from "../Pages/Profile";
import Loading from "../Utility/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        loader: () => fetch("/SkillListings.json"),
        Component: Home,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "skill-details/:id",
        loader: () => fetch("/SkillListings.json"),
        element: <SkillDetails></SkillDetails>,
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
      {
        path: "all-skills",
        loader: () => fetch("/SkillListings.json"),
        Component: AllSkills,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
