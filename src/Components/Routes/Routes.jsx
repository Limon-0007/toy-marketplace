import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import Login from "../LoginSystem/Login/Login";
import Register from "../LoginSystem/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/HomeLayout/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://toy-marketplace-server-side-nine.vercel.app/addAToy"),
      },
      {
        path: "allToys/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-side-nine.vercel.app/addAToy/${params.id}`
          ),
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "myToys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-side-nine.vercel.app/addAToy/${params.id}`
          ),
      },
      {
        path: "myToys/addAToy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
