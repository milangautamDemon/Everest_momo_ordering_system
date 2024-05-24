import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Layout from './components/layout/Layout';
import Advice from './pages/Advice';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import Service from './pages/Service';


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
          path: '/contactus',
          element: <ContactUs />
        },
        {
          path: '/service',
          element: <Service />
        }
      ]
    }
  ]);

  return (
    // Use RouterProvider to provide the router to your application
    <RouterProvider router={router} />
  );
}

export default App;

  

