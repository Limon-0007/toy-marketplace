import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import Login from "../LoginSystem/Login/Login";
import Register from "../LoginSystem/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/HomeLayout/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/addAToy")
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
        loader: () => fetch("http://localhost:5000/addAToy")
      },
      {
        path: "myToys/addAToy",
        element: <AddAToy></AddAToy>
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <Register></Register>
      }
    ]
  },
  // {
  //   path: "blogs",
  //   element: <Blogs></Blogs>
  // },
  // {
  //   path: "login",
  //   element: <Login />,
  // },
  // {
  //   path: "signup",
  //   element: <Register/>,
  // },
]);

export default router;
