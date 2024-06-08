import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
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
import AdminRoute from "./middlewares/AdminRoute";
import Login from "./pages/admin/Login";
import EditMenu from "./pages/admin/components/EditMenu";
import AddCustomerTalk from "./pages/admin/components/AddCustomerTalk";

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
      element: <AdminRoute />,
      children: [
        {
          path: "",
          element: <AdminLayout />,
          children: [
            {
              path: "",
              element: <Outlet />,
              children: [
                {
                  path: "",
                  element: <AdminHome />,
                },
                {
                  path: "addCustomerTalk",
                  element: <AddCustomerTalk />,
                },
              ],
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
              element: <Outlet />, // Outlet renders nested routes
              children: [
                {
                  index: true,
                  element: <AdminMenu />,
                },
                {
                  path: "edit/:id",
                  element: <EditMenu />,
                },
              ],
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
