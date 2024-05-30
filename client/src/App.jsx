import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Layout from './components/layout/Layout';
import Advice from './pages/Advice';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import { Toaster } from 'react-hot-toast';


function App() {
  // Define the routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children : [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/aboutus',
          element: <AboutUs />
        },
        {
          path: '/advice',
          element: <Advice />
        },
        {
          path: '/menu',
          element: <Menu />
        },
        {
          path: '/contact',
          element: <ContactUs />
        },
        {
          path: '/services',
          element: <Services />
        }
      ]
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    <Toaster />
    </>
  );
}

export default App;

  

