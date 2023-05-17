import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import Login from "../LoginSystem/Login/Login";
import Register from "../LoginSystem/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
  },
  {
    path: "blogs",
    element: <Blogs></Blogs>
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register/>,
  },
]);

export default router;
