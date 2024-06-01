import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/layout/Layout";
import Advice from "./pages/Advice";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import { Toaster } from "react-hot-toast";
import AdminHome from "./pages/admin/AdminHome";
import AdminAboutUs from "./pages/admin/AdminAboutUs";
import AdminAdvice from "./pages/admin/AdminAdvice";
import AdminMenu from "./pages/admin/AdminMenu";
import AdminContactUs from "./pages/admin/AdminContactUs";
import AdminServices from "./pages/admin/AdminServices";
import AdminLayout from "./components/layout/AdminLayout";
import AdminRoute from "../routes/AdminRoute";
import Login from "./pages/admin/Login";

function App() {
  // Define the routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "aboutus",
          element: <AboutUs />,
        },
        {
          path: "advice",
          element: <Advice />,
        },
        {
          path: "menu",
          element: <Menu />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
        {
          path: "services",
          element: <Services />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />, // Add the login route
    },
    {
      path: "admin",
      element: <AdminRoute />, // Use AdminRoute here
      children: [
        {
          path: "",
          element: <AdminLayout />,
          children: [
            {
              path: "",
              element: <AdminHome />,
            },
            {
              path: "aboutus",
              element: <AdminAboutUs />,
            },
            {
              path: "advice",
              element: <AdminAdvice />,
            },
            {
              path: "menu",
              element: <AdminMenu />,
            },
            {
              path: "contact",
              element: <AdminContactUs />,
            },
            {
              path: "services",
              element: <AdminServices />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
